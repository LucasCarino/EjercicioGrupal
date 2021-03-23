sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("EjercicioPractico.EjercicioPractico.controller.Secondary", {
			onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteSecondary").attachPatternMatched(this.test, this);
                // this.test();
            },
            onBack: function () {
                this.getOwnerComponent().getRouter().navTo("RouteMain");
            },
            test: function () {
                alert('attach');
            }
		});
	});