sap.ui.define([
	"RTLtest1/controller/BaseController",
	"sap/ui/model/Filter"
], function(BaseController, Filter) {
	"use strict";

	return BaseController.extend("RTLtest1.controller.InvoiceS", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf RTLtest1.view.view.view.InvoiceS
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf RTLtest1.view.view.view.InvoiceS
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf RTLtest1.view.view.view.InvoiceS
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf RTLtest1.view.view.view.InvoiceS
		 */
		//	onExit: function() {
		//
		//	}

		// when the item in the invoiceS list is pressed we navigate to a detail page
		onInvoicePress: function(oEvent) {
			var oItem, oCtx;

			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();

			this.getRouter().navTo("details", {
				Invoiceid: oCtx.getProperty("Invoiceid")
			});

		},

		onSearch: function(oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var oFilter1 = [new sap.ui.model.Filter("Vendorname", sap.ui.model.FilterOperator.Contains, sQuery), 
								new sap.ui.model.Filter("ItemDescription", sap.ui.model.FilterOperator.Contains, sQuery)];
				var allFilters = new sap.ui.model.Filter(oFilter1, false);
				aFilters.push(allFilters);
			}

			// update list binding
			this.getView().byId("invoiceList").getBinding("items").filter(aFilters, "Application");

			
		}
	});

});