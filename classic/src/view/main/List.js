/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Contacts',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Surname',  dataIndex: 'surname' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Info',  dataIndex: 'info' },
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
              {
                  xtype: 'button',
                  name: 'add',
                  text: 'Add',
                  itemId: 'addButton',
                  handler: function() {
                      alert('click');
                  }
              },
              {
                  xtype: 'button',
                  name: 'edit',
                  text: 'Edit',
                  itemId: 'editButton',
                  listeners: {
                      click: 'editme'
                  }
              },
              {
                xtype: 'button',
                name: 'delete',
                text: 'Delete',
                itemId: 'deleteButton',
                listeners: {
                    click: 'onItemSelected'
                }
            }
] }],

    // buttons: [{
    //     text: 'Add Contact',
    //     formBind: true,
    //     listeners: {
    //         click: 'onLoginClick'
    //     }
    // }],

    // listeners: {
    //     select: 'onItemSelected'
    // }
});
