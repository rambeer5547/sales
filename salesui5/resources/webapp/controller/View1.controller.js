sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("salesdemo.salesui5.controller.View1", {
onSend: function (oEvent) {
			var oView = this.getView();
			console.log(oView);
		}
	});
});	