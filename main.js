$(function () {
    if (!location.href.includes("www.google.com/search") && !location.href.includes("www.google.co.jp/search")) {
        return;
    }

    // 検索メニューを並び順固定で再生性
    let params = new URLSearchParams(location.search);
    let tbm = params.getAll('tbm').pop();

    params.delete("tbm");
    let search = params.toString();

    let text = '<div style="display: inline; margin-left: 169px;">' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="' + '/search?' + search + '&amp;tbm=' + '"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path><path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path><path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path></svg></span>' + 'All' +
        (!tbm ? '<div style="background: #1a73e8; height: 3px; margin-top: 11px;"></div>' : '') +
        '</a></div>' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="' + '/search?' + search + '&amp;tbm=isch' + '"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg class="DCxYpf" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4285F4" d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#EA4335" d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#34A853" d="M14 13l-2.25 2.75L10 14l-4 4h12z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#FBBC04" d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"></path></svg></span>Images' +
        (tbm === 'isch' ? '<div style="background: #1a73e8; height: 3px; margin-top: 11px;"></div>' : '') +
        '</a></div>' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="' + '/search?' + search + '&amp;tbm=vid' + '"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg focusable="false" viewBox="0 0 24 24"><path fill="#4285f4" d="M10 16.5l6-4.5-6-4.5"></path><path fill="#ea4335" d="M20 12h2v7.5a2.5 2.5 0 0 1-2.5 2.5H12v-2h7a1 1 0 0 0 1-1v-7"></path><path fill="#fbbc04" d="M20 12V5a1 1 0 0 0-1-1h-7V2h7.6A2.4 2.4 0 0 1 22 4.4V12h-2"></path><path fill="#34a853" d="M12 20v2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2H12v2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7"></path></svg></span>Videos' +
        (tbm === 'vid' ? '<div style="background: #1a73e8; height: 3px; margin-top: 11px;"></div>' : '') +
        '</a></div>' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="' + '/search?' + search + '&amp;tbm=nws' + '"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M22 12h-2v6.22c-.07.48-.51.82-1 .78h-7v2h7c1.59.05 2.92-1.17 3-2.76V12"></path><path fill="#4285f4" d="M19 3h-7v2h7c.49-.04.92.3 1 .78V12h2V5.76A2.93 2.93 0 0 0 19 3"></path><path fill="#ea4335" d="M12 3H5a2.93 2.93 0 0 0-3 2.76V12h2V5.78A.94.94 0 0 1 5 5h7V3"></path><path fill="#fbbc04" d="M4 12H2v6.24A2.916 2.916 0 0 0 5 21h7v-2H5c-.49.04-.92-.3-1-.78L4.01 12"></path><path fill="#4285f4" d="M10 7H6v6h4V7m8 4h-6v2h6v-2m0 4H6v2h12v-2m0-8h-6v2h6V7"></path></svg></span>News' +
        (tbm === 'nws' ? '<div style="background: #1a73e8; height: 3px; margin-top: 11px;"></div>' : '') +
        '</a></div>' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="' + '/search?' + search + '&amp;tbm=shop' + '"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg focusable="false" viewBox="0 0 24 24"><path fill="#ea4335" d="M8.65 8.04l-1.4-1.41 3.74-3.74c.58-.58 1.35-.89 2.16-.89h5.8c.82 0 1.58.31 2.16.89L19.69 4.3c-.2-.2-.47-.31-.74-.31l-5.8.01c-.28 0-.54.1-.74.3L8.65 8.04"></path><path fill="#fbbc05" d="M5.8 18.2l-2.9-2.9c-1.19-1.19-1.19-3.12 0-4.32l4.36-4.36 1.4 1.41-4.35 4.37c-.41.41-.41 1.08 0 1.49l2.9 2.9L5.8 18.2"></path><path fill="#4285f4" d="M21.11 2.89L19.69 4.3c.21.21.31.48.31.75v5.8c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9L5.8 18.2l2.89 2.9c.6.6 1.38.9 2.16.9.78 0 1.56-.29 2.16-.89l4.36-4.36 3.73-3.74c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16"></path><circle fill="#34a853" cx="16" cy="8" r="2"></circle></svg></span>Shopping' +
        (tbm === 'shop' ? '<div style="background: #1a73e8; height: 3px; margin-top: 11px;"></div>' : '') +
        '</a></div>' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="' + '/search?' + search + '&amp;tbm=bks' + '"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg focusable="false" viewBox="0 0 24 24"><path fill="#fbbc04" d="M6 20v-8H4v8c0 1.1.9 2 2 2h6v-2H6"></path><path fill="#34a853" d="M18 20h-6v2h6a2 2 0 0 0 2-2v-8h-2v8"></path><path fill="#ea4335" d="M18 2h-5v2h5v8h2V4a2 2 0 0 0-2-2"></path><path fill="#4285f4" d="M6 2a2 2 0 0 0-2 2v8h2V4h2v8l2.5-1.5L13 12V2H6"></path></svg></span>Books' +
        (tbm === 'bks' ? '<div style="background: #1a73e8; height: 3px; margin-top: 11px;"></div>' : '') +
        '</a></div>' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="/maps?q=' + params.get('q') + '"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg focusable="false" viewBox="0 0 16 16"><path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path></svg></span>Maps</a></div>' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="/flights?q=' + params.get('q') + '"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg focusable="false" viewBox="0 0 24 24"><path d="M12.98 12.89l-4.03 4.03.42 2.95L8.24 21l-1.87-3.37L3 15.76l1.12-1.12 2.95.42 4.03-4.03L3 6.77l1.5-1.5 10.04 2.32 4.2-4.2a1.32 1.32 0 0 1 1.87 0c.52.52.52 1.36 0 1.87l-4.2 4.2 2.32 10.04-1.5 1.5-4.25-8.11"></path></svg></span>Flights</a></div>' +
        '<div style="height: 16px; line-height: 16px; margin: 11px 1px 0; display: inline-block;"><a style="color: #5f6368; text-decoration: none; display: inline-block; padding: 17px 12px 11px 10px;" href="/finance"><span style="display: inline-block; fill: currentColor; height:16px; vertical-align: text-bottom; margin-right: 5px; width:16px;"><svg focusable="false" viewBox="0 0 24 24"><path d="M6 15.5l-3 2.94V10h3v5.5zm5-1.84l-1.57-1.34L8 13.64V6h3v7.66zM16 12l-3 3V2h3v10zm2.81-.19L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83"></path></svg></span>Finance</a></div>' +
        '</div>';

    $(".MUFPAc").parent().html(text);
    $(".O850f").html(text);

    // 検索Toolsを常に表示
    $(".t2vtad").remove();
    $(".yg51vc").css("padding-bottom", "1em");
    $(".Lj8KXd").css("display", "contents");
    $(".Lj8KXd").removeClass("yyoM4d p4DDCd");
    $(".appbar").removeClass("hdtb-ab-o");

    $(".PAYrJc").remove();
    $(".O850f").css("padding-bottom", "2em");
    $(".ECgenc").removeClass("eLNT1d");

    // Favicon追加
    $(".yuRUbf > a").each(function () {
        try {
            let domain = new URL($(this).attr('href'));
            let favget = "//www.google.com/s2/favicons?domain=" + domain.hostname;
            $(this).find("br").after("<img src='" + favget + "' class='favi'/>");
        } catch (e) {
        }
    });
});