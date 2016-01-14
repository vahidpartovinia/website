"use strict";
var emotionClassifier = function() {

	var previousParameters = [];
	var classifier = {};//logistic regression
	var classifierRidge={};
	var emotions = [];
	var coefficient_length;
	this.sensibility={};

	this.getEmotions = function() {
		return emotions;
	}

	this.initClassifier = function(paramsClassifier,model){
		var tempClassifier={};
		var isEmotionEmpty=emotions.length;
		for (var m in paramsClassifier) {
			if (isEmotionEmpty==0){
				emotions.push(m);
				document.getElementById("emotionSensibility").innerHTML+="<input type='range' class='emotion_icon' name=trackBar"+m+" min='1' max='10' onchange='updateSensibility(this)' value="+(model.Sensibility[m]).toString()+">";
				this.sensibility[m]=model.Sensibility[m];
				//console.log(sensibility);
			}
			
			tempClassifier[m] = {};
			tempClassifier[m]['bias'] = paramsClassifier[m]['bias'];
			tempClassifier[m]['coefficients'] = paramsClassifier[m]['coefficients'];
		}

		return tempClassifier;
	}

	this.init = function(model) {
		// load it
		classifier=this.initClassifier(model.Log,model);
		classifierRidge=this.initClassifier(model.Ridge);
		coefficient_length = classifier[emotions[0]]['coefficients'].length;
		
		//console.log(classifier);
		//console.log(sensibility);
		
	}

	this.getBlank = function() {
		var prediction = [];
		for (var j = 0;j < emotions.length;j++) {
			prediction[j] = {"emotion" : emotions[j], "value" : 0.0};
		}
		return prediction;
	}

	this.predictLog = function(parameters) {
		var prediction = [];
		for (var j = 0;j < emotions.length;j++) {//for each emotion
			var e = emotions[j];
			var score = classifier[e].bias//get model parameter
			for (var i = 0;i < coefficient_length;i++) {
				score += classifier[e].coefficients[i]*parameters[i+6];//?pq plus 6
			}
			prediction[j] = {"emotion" : e, "value" : 0.0};
			prediction[j]['value'] = (1.0/(1.0 + Math.exp(-score)))*this.sensibility[emotions[j]]/5;
		}
		return prediction;
	}

	this.predictRidge = function(parameters) {
		var prediction = [];
		for (var j = 0;j < emotions.length;j++) {//for each emotion
			var e = emotions[j];
			var score = classifier[e].bias//get model parameter
			for (var i = 0;i < coefficient_length;i++) {
				score += classifier[e].coefficients[i]*parameters[i+6];//?pq plus 6
			}
			prediction[j] = {"emotion" : e, "value" : 0.0};
			prediction[j]['value'] = (1.0/(1.0 + Math.exp(-score)))*this.sensibility[emotions[j]]/5;//(Math.exp(score)/4)*this.sensibility[emotions[j]]/5;//approximated value
		}
		return prediction;
	}

	this.meanPredict = function (parameters,predictFunc) {
		// store to array of 10 previous parameters
		previousParameters.splice(0, previousParameters.length == 10 ? 1 : 0);
		previousParameters.push(parameters.slice(0));
		
		if (previousParameters.length > 9) {
			// calculate mean of parameters?
			var meanParameters = []
			for (var i = 0;i < parameters.length;i++) {
				meanParameters[i] = 0;
			}
			for (var i = 0;i < previousParameters.length;i++) {
				for (var j = 0;j < parameters.length;j++) {
					meanParameters[j] += previousParameters[i][j];
				}
			}
			for (var i = 0;i < parameters.length;i++) {
				meanParameters[i] /= 10;
			}

			// calculate logistic regression 
			if (predictFunc==1){
				return this.predictRidge(meanParameters);
			}
			else
			{
				return this.predictLog(meanParameters);
			}
			
		} else {
			return false;	
		}
	}
}