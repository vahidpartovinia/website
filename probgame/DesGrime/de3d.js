"use strict";
window.requestAnimFrame =
        (
            function (callback)
            {
                return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback)
                {
                    window.setTimeout(callback, 1000 / 60);
                };
            }
        )();

            var De3D = function (objet, faces)
            {
                var viewportJQuery = objet;
                var viewport = viewportJQuery.get(0);
                console.log(viewport);
                // renderer avec detecteur de webgl
                var renderer = Detector.webgl ? new THREE.WebGLRenderer({ antialias: true }) : new THREE.CanvasRenderer();
                console.log(viewportJQuery.innerWidth() + " " + viewportJQuery.innerHeight());
                renderer.setSize(viewportJQuery.innerWidth(), viewportJQuery.innerHeight());
                viewport.appendChild(renderer.domElement);

                // camera
                var camera = new THREE.PerspectiveCamera
            (45, viewportJQuery.innerWidth() / viewportJQuery.innerHeight(), 1, 1000);
                camera.position.z = 450;
                camera.position.y = 90;
                var scene = new THREE.Scene();
                this.faces = faces;
                this.facesInit = faces;
                // Création du cube
                var materials = [];

                // Création du cube
                var cube = new THREE.Mesh
	            (
	                new THREE.CubeGeometry(100, 100, 100),
	                new THREE.MeshFaceMaterial()
	            );

                this.three =
                {
                    renderer: renderer,
                    camera: camera,
                    scene: scene,
                    cube: cube
                };
                scene.add(cube);


                cube.overdraw = true;


                this.totalRotation =
                {
                    "x": 2 * Math.PI * (320 / 360),
                    "y": 2 * Math.PI * (360 / 360),
                    "z": 2 * Math.PI * (315 / 360)
                };
                this.three.cube.rotation.x = this.totalRotation.x;
                this.three.cube.rotation.y = this.totalRotation.y;
                this.three.cube.rotation.z = this.totalRotation.z;


                // Ambient lighting
                var ambientLight = new THREE.AmbientLight(0x555555);
                scene.add(ambientLight);

                // Directional light source
                var directionalLight = new THREE.DirectionalLight(0xffffff);
                directionalLight.position.set(1, 1, 1).normalize();
                scene.add(directionalLight);

                var loadedTextures = 0;


                for (var i = 0; i < 6; i++)
                {

                    materials[i] = new THREE.MeshLambertMaterial
                    (
                        {
                            map: THREE.ImageUtils.loadTexture
                            (
                                "grime5\\faces\\" + this.faces[i] + ".png", {},
                                function ()
                                {
                                    loadedTextures++;
                                    if (loadedTextures == 6)
                                    {
                                        renderer.render
                                        (
                                            scene,
                                            camera
                                        );
                                    } 
                                }
                            )
                        }
                    );
                }
                    cube.material = new THREE.MeshFaceMaterial(materials);

            };

        De3D.prototype.reorderFacesForVictory = function (victorIndex)
        {
            var newFaces = [];
            for (var i = 0; i < 6; i++)
            {
                newFaces[(i + 4) % 6] = this.facesInit[(i + victorIndex) % 6];
            }
            this.faces = newFaces;
        }

        De3D.prototype.returnCube = function ()
        {

            var loadedTextures = 0;
            var materials = [];
            for (var i = 0; i < 6; i++)
            {
                materials[i] = new THREE.MeshLambertMaterial
                (
                {
                    map: THREE.ImageUtils.loadTexture
                    (
                        "grime5\\faces\\" + this.faces[i] + ".png"
                    )
                }
                );
            }

            // Création du cube
            this.three.cube.material = new THREE.MeshFaceMaterial(materials);
        }

        De3D.prototype.throw_ = function (gagnant)
        {
            var three = this.three;

            this.reorderFacesForVictory(gagnant)
            this.returnCube();

            var firstTime = true;
            var totalTime = 700 + Math.floor(Math.random() * 600);
            //TODO: Calculer les rotations associées avec chaque face.
            //Ici, les angles sont en radians.


            var date = new Date();
            var initialTime = date.getTime();
            
  
            var animate = function(three)
            {

                var totalRotation =
                {
                    "x": 2 * Math.PI * (320 / 360),
                    "y": 2 * Math.PI * (360 / 360),
                    "z": 2 * Math.PI * (315 / 360)
                };

                var date = new Date();
                //Comme le taux de rafraichissement n'est pas constant,
                //si on veut être sûr de la position finale du dé,
                //on détermine une durée, puis à chaque rafraichissement,
                //on regarde quelle fraction du temps est écoulée



                if (date.getTime() < initialTime + totalTime)
                {
                    three.cube.rotation.x = (totalRotation.x * (date.getTime() - initialTime) / totalTime);
                    three.cube.rotation.y = (totalRotation.y * (date.getTime() - initialTime) / totalTime);
                    three.cube.rotation.z = (totalRotation.z * (date.getTime() - initialTime) / totalTime);
                }

                //Ici, on veut qu'au temps final, le dé adopte la position escomptée
                else
                {
                    three.cube.rotation.x = totalRotation.x;
                    three.cube.rotation.y = totalRotation.y;
                    three.cube.rotation.z = totalRotation.z;
                }


                var hauteurMaximale = 160;
                var acceleration = -8 * hauteurMaximale / (totalTime * totalTime);
                var vitesseInitiale = -acceleration * totalTime / 2;

                var t = date.getTime() - initialTime;

                if (date.getTime() < initialTime + totalTime)
                {
                    three.cube.position.y = (vitesseInitiale * t + (1 / 2) * acceleration * t * t);
                }
                else
                {
                    three.cube.position.y = 0;

                }

                // render
                three.renderer.render(three.scene, three.camera);

                if (
                    three.cube.position.y == 0 &&
                    three.cube.rotation.x == totalRotation.x &&
                    three.cube.rotation.y == totalRotation.y &&
                    three.cube.rotation.z == totalRotation.z
                    )
                {
                    return;
                }

                // request new frame
                requestAnimFrame(function ()
                {
                    animate(three);
                });
            }
            animate(three);
            
        }