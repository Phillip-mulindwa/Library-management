// Copyright (c) 2026, Phillip Mulindwa and contributors
// For license information, please see license.txt
frappe.ui.form.on("Loan", {

    validate(frm) {

        if (frm.doc.return_date && frm.doc.transaction_date) {

            if (frm.doc.return_date < frm.doc.transaction_date) {

                frappe.throw("Return Date cannot be before the Transaction Date.");

            }
        }
    }

});
