# Copyright (c) 2026, Phillip Mulindwa and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import nowdate


class Loan(Document):

    def before_save(self):
        now = nowdate()

        if not self.transaction_date:
            self.transaction_date = now

    def before_submit(self):
        loan_book = self.book
        book = frappe.get_doc("Book", self.book)
        book.status = "Rented"
        book.save()

        
        

        
	  
	      
	  
	
