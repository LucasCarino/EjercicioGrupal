sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "EjercicioPractico/EjercicioPractico/util/Common"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Commons) {
		"use strict";

		return Controller.extend("EjercicioPractico.EjercicioPractico.controller.Secondary", {
			onInit: function () {                
                this.test();
            },
            onBeforeRendering: function () {
                alert('onBeforeRendering')
            },
            onBack: function () {
                Commons.onNavBack(this)
            },
            test: function () {
                alert('attach');
            }
		});
	});