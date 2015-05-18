'use strict';

(function() {

  var settings = {
    isPackage: false,
    manifest: 'https://mancas.github.io/settings-server/manifest.webapp'
  };

  var fm = {
    isPackage: false,
    manifest: 'https://mancas.github.io/fm-server/manifest.webapp'
  };

  var deviceStorage = {
    isPackage: false,
    manifest: 'https://mancas.github.io/storage-server/manifest.webapp'
  };

  var systemXHR = {
    isPackage: false,
    manifest: 'https://mancas.github.io/systemxhr-server/manifest.webapp'
  };

  var contacts = {
    isPackage: false,
    manifest: 'https://mancas.github.io/contacts-server/manifest.webapp'
  };

  function install(app) {
    console.log('CJC - Start installation...' + JSON.stringify(app));
    if (!app) {
      console.log('CJC - App does not received!');
      return;
    }

    console.log('CJC - Install as ' +
                (app.isPackage ? 'package':'hosted') +
                ':' + app.manifest);
    var request;
    if (app.isPackage) {
      request = navigator.mozApps.installPackage(app.manifest);
    } else {
      request = navigator.mozApps.install(app.manifest);
    }

    request.onsuccess = function () {
      console.log('CJC - Installation successful! ' + app.manifest);
    };
    request.onerror = function () {
      // Display the error information from the DOMError object
      alert(app.manifest + ' Install failed, error: ' + request.error.name);
    };
  }

  // Testing purpose only!!!!
  window.addEventListener('load', function () {
    console.log('CJC - Loaded shim installer');
    var installBtoSettings = document.getElementById('installsettings');
    var installBtoFM = document.getElementById('installfm');
    var installBtoContacts = document.getElementById('installcontacts');
    var installBtoStorage = document.getElementById('installstorage');
    var installBtoSystemXHR = document.getElementById('installsystemxhr');
    installBtoSettings.addEventListener('click', install.bind(null, settings));
    installBtoFM.addEventListener('click', install.bind(null, fm));
    installBtoContacts.addEventListener('click', install.bind(null, contacts));
    installBtoStorage.addEventListener('click', install.bind(null, deviceStorage));
    installBtoSystemXHR.addEventListener('click', install.bind(null, systemXHR));
  });

  console.log('CJC - install.js loaded');
})();
