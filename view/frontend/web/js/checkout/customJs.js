define(
    [
        'ko',
        'jquery',
        'uiComponent',
        'mage/url'
    ],
    function (ko, $, Component,url) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Vb_SellerCode/checkout/sellerCode'
            },
            initObservable: function () {

                this._super()
                    .observe({
                        sellerCodes: ko.observable()
                    });
                var varSellerCode="";
                self = this;
                this.sellerCodes.subscribe(function (newValue) {
                    var linkUrls  = url.build('sellercode/checkout/saveInQuote');

                    varSellerCode = jQuery('#sellerCode').val();

                    $.ajax({
                        showLoader: true,
                        url: linkUrls,
                        data: {sellerCode : varSellerCode},
                        type: "POST",
                        dataType: 'json'
                    }).done(function (data) {
                        console.log('success');
                    });
                });
                return this;
            }
        });
    }
);
