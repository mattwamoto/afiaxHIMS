// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Healthcare Service Insurance Coverage', {
	refresh: function(frm) {
		frm.set_query('healthcare_insurance_coverage_plan', function() {
			return {
				filters: {
					'is_active': 1
				}
			};
		});

		frm.set_query('medical_code', function() {
			return {
				filters: {
					'medical_code_standard': frm.doc.medical_code_standard
				}
			};
		});

		frm.set_query('healthcare_service', function() {
			let service_template_doctypes = ['Appointment Type', 'Clinical Procedure Template', 'Therapy Type',
				'Medication', 'Lab Test Template', 'Healthcare Service Unit Type'];

			return {
				filters: {
					name: ['in', service_template_doctypes]
				}
			};
		});
	}
});
