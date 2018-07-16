Ext.define('MyApp.view.form.Form', {
  extend: 'Ext.window.Window',

  requires: [
    'MyApp.view.form.FormController',

],
  
  id: 'confirm',
  border: 0,
  height: 270,
  width:480,
  resizable: false,
  modal: true,
  closable: false,
  title: 'add',
  
  layout: 'fit',
  items: [
      {
      xtype: 'form',
      layout: 'column',
      itemId: 'formPanel',
      defaults: {
      columnWidth: 1,
      allowBlank: false,
      style: {
        marginBottom: '5px'
        }
      },
      bodyStyle: {
        padding: '5px'
      },
      items: [
          {
            xtype: 'textfield',
            fieldLabel: 'Name',
            itemId: 'name',
            name: 'name'
          },
          {
            xtype: 'textfield',
            fieldLabel: 'Surname',
            itemId: 'surname',
            name: 'surname'
          },
          {
            xtype: 'textfield',
            fieldLabel: 'Email',
            itemId: 'email',
            name: 'email',
            vtype: 'email'
          },
          {
            xtype: 'numberfield',
            fieldLabel: 'Phone',
            itemId: 'phone',
            name: 'phone',
            maxValue: 16,
            minValue: 8,
            msgTarget: 'under', 
            invalidText: 'Enter a valid phone number, 8-16 numeric characters'
          },
          {
            xtype: 'textfield',
            fieldLabel: 'Info',
            itemId: 'info',
            name: 'info'
          }
      ]
      }
  ],
  
   buttons: [{
          text: 'Save',
          itemId: 'saveButton',
          handler: function() {
            // form.updateRecord(record); use this method
          }
      }, {
          text: 'Cancel',
          itemId: 'cancelButton',
          handler: function() {
                     
        
          }
      }]    


});