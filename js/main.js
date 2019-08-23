$(function () {
    var $document = $(document);

    $('.js-show-chat').on('click', function (e) {
        e.preventDefault();
        if (typeof LiveTex !== 'undefined') {
            LiveTex.showConversationWindow(
                function (employee) {
                },
                function (error) {
                },
                '*', '*',
                'Здравствуйте'
            );
        }
    });

});