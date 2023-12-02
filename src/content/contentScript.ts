import "arrive";
import $ from "jquery";
import * as Constants from "../lib/constants";

// Should not directly import contentStyle.css because it will be injected into the page

// Anonymous function so minifiers can rename local variables for better compression
((context) => {
  const { window, document, chrome } = context;

  const { storage: storageApi, runtime: runtimeApi } = chrome;

  const { local: Storage } = storageApi;

  const manifest = runtimeApi.getManifest();

  $(() => {
    // Todo: Init when document is ready

    Storage.get(["key", "some-key"]).then(({ key, "some-key": someKey }) => {
      console.log("key", key);
      console.log("someKey", someKey);
      // Todo
    });
  });

  storageApi.onChanged.addListener((changes, namespace) => {
    // Todo: Handle storage changes if required
  });

  runtimeApi.onMessage.addListener((message, sender, sendResponse) => {
    if (message.m === Constants.REQUEST_PING) {
      sendResponse({ m: Constants.RESPONSE_PONG });
    }

    // Todo: Handle other messages if required
  });

  document.arrive(
    "<css-selector>",
    {
      // onceOnly: false,
      // existing: true,
      // fireOnAttributesModification: false,
    },
    (element) => {
      // Todo: Element was removed
    }
  );

  document.leave("<css-selector>", (element) => {
    // Todo: Element was removed
  });
})(window);
