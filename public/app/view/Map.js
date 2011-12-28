Ext.define('GeoTweets.view.Map', {
    extend: 'Ext.Map',
    xtype: 'localmap',
    config: {
        title: 'Map',
        useCurrentLocation: true
    },

    constructor: function() {
        this.callParent(arguments);

        this._geo.setAutoUpdate(false);
        this._geo.on('locationupdate', function() {
            console.log('updating location')
        })
    }

})