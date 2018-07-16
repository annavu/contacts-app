Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'surname', 'email', 'phone', 'info'
    ],

    data: { items: [
        { name: 'Jan', surname: 'Kowalski', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", info: "" },
        { name: 'Worf',  surname: 'Kowalski',   email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", info: ""},
        { name: 'Deanna', surname: 'Kowalski',  email: "deanna.troi@enterprise.com",    phone: "555-333-3333", info: "" },
        { name: 'Data',  surname: 'Kowalski',   email: "mr.data@enterprise.com",        phone: "555-444-4444", info: "" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
