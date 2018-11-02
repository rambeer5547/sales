function saveCustomer(customer) {
var conn = $.hdb.getConnection();
var output = JSON.stringify(customer);
var fnCreateCustomer=
conn.loadProcedure("sales.salesdb.procedures::crecustomer");
var result=fnCreateCustomer(
{
IM_CUSTOMERNUM :customer.customernum,
IM_NAME     :customer.name,
IM_CITY     :customer.city,
IM_REGION   :customer.region,
IM_COUNTRY  :customer.country
}
);
conn.commit();
conn.close();
if (result && result.EX_ERROR !== null) { return result.EX_ERROR;}
else { return output; }

}


var customer = {
  customernum: $.request.parameters.get("customernum"),
  name: $.request.parameters.get("name"),
  city: $.request.parameters.get("city"),
  region: $.request.parameters.get("region"),
  country: $.request.parameters.get("country")
  
};

// validate the inputs here!

var output = saveCustomer(customer);

$.response.contentType = "application/json";

$.response.setBody(output);