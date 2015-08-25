function ValidateContact()
{
	var frmName = 'frmContact';
	var a = new Array();

	// required fields
	a[0] = new fnValidationItem(frmName, 'Full Name', 'sFullName', 'any', true);
	a[1] = new fnValidationItem(frmName, 'Email', 'sEmail', 'email', true);
	a[2] = new fnValidationItem(frmName, 'Message', 'sMessage', 'any', true);

	// return general validation on the form
	var boolParsed = fnValidation(a);
	return boolParsed;
}