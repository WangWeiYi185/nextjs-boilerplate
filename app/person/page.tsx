"use client";
import React, { useEffect, useRef } from 'react';

const botId = '7470147038064721931';
const token = 'pat_H5Jz3sExKQe5zg2Tj7knyALHR0Bx8CtHysdJBvRGL3B9rUOGMP9YKfPS3wyRnO55';

declare global {
  interface Window {
    CozeWebSDK?: any;
  }
}

export default function PersonPage() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function initCoze() {
      if (window.CozeWebSDK && chatContainerRef.current) {
        new window.CozeWebSDK.WebChatClient({
          config: {
            bot_id: botId,
          },
          componentProps: {
            title: 'Coze',
          },
          auth: {
            type: 'token',
            token: token,
            onRefreshToken: function () {
              return token;
            }, 

          },
          userInfo: {
            id: '123',
            url: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
            nickname: '3qweqweqwe',
          },
          ui: {
            base: {
                icon: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
                layout: 'pc',
                zIndex: 1000,
            },
            // asstBtn: {
            //     isNeed: false,
            // },
          },
        });
      }
    }

    if (window.CozeWebSDK) {
      initCoze();
    } else {
      const script = document.createElement('script');
      script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.8/libs/cn/index.js';
      script.async = true;
      script.onload = initCoze;
      document.body.appendChild(script);
    }
  }, []);

  return <div ref={chatContainerRef} />;
}


