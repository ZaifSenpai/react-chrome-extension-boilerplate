import * as Constants from "../lib/constants";

((chrome) => {
  const { storage: storageApi, runtime: runtimeApi } = chrome;

  const { local: Storage } = storageApi;

  const manifest = runtimeApi.getManifest();

  chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === runtimeApi.OnInstalledReason.INSTALL) {
      // Todo: on First install
    } else if (details.reason === runtimeApi.OnInstalledReason.UPDATE) {
      // Todo: on Update
    }
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
})(chrome);
