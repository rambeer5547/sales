function saveCustomer(order) {
	var conn = $.hdb.getConnection();
	var output = JSON.stringify(order);
	var fnCreateOrder =
		conn.loadProcedure("sales.salesdb.procedures::creorder");
	var result = fnCreateOrder({
		IM_ORDERNUM: order.ordernum,
		IM_CUSTOMERID: order.customerid,
		IM_MATERIAL: order.material,
		IM_AMOUNT: order.amount
	});
	conn.commit();
	conn.close();
	if (result && result.EX_ERROR !== null) {
		return result.EX_ERROR;
	} else {
		return output;
	}

}

var order = {
	ordernum: $.request.parameters.get("ordernum"),
	customerid: $.request.parameters.get("customerid"),
	material: $.request.parameters.get("material"),
	amount: $.request.parameters.get("amount")


};

// validate the inputs here!

var output = saveCustomer(order);

$.response.contentType = "application/json";

$.response.setBody(output);