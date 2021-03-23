sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "EjercicioPractico/EjercicioPractico/util/Common"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageBox, Commons) {
		"use strict";
		return Controller.extend("EjercicioPractico.EjercicioPractico.controller.Main", {
			onInit: function () {
                alert('Método onInit()');
                this.getOwnerComponent().getRouter().getRoute("RouteSecondary").attachPatternMatched(this.test, this);
            },
            onBeforeRendering: function () {
                alert('Método onBeforeRendering()');
            },
            onAfterRendering: function () {
                alert('Método onAfterRendering()');
            },
            onExit: function () {
                alert('Método onExit()')
            },
            onNavigate: function () {
                this.getView().destroy();
                Commons.onNavigate(this, "RouteSecondary");
            },
            test: function () {
                this.getView();
            }
		});
	});