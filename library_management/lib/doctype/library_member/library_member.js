// Copyright (c) 2026, Phillip Mulindwa and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Member", {
      refresh(frm) {

      },

      first_name(frm){
         setfullname(frm)
      },
      last_name(frm){
        setfullname(frm)
      },
      after_save(frm){
        frappe.msgprint(`Hallo ${frm.doc.full_name}`)

      }
}); 

function setfullname(frm){
        first_name = frm.doc.first_name || ""
        last_name = frm.doc.last_name || ""
        f_name = `${first_name} ${last_name}`
        frm.set_value("full_name",f_name)
}
