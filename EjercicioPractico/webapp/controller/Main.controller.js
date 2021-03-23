sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageBox) {
		"use strict";
		return Controller.extend("EjercicioPractico.EjercicioPractico.controller.Main", {
			onInit: function () {
                // alert('Método onInit()')
            },
            onBeforeRendering: function () {
                // alert('Método onBeforeRendering()');
            },
            onAfterRendering: function () {
                // alert('Método onAfterRendering()');
            },
            onExit: function () {
                alert('Método onExit()')
            },
            onNavigate: function () {
                this.getView().destroy();
                this.getOwnerComponent().getRouter().navTo("RouteSecondary");
            }
		});
	});