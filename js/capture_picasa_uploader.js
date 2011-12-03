/**
 * Uploading the image to Picaso.
 */
CapturePicasaUploader = function() {
  this.oauth = ChromeExOAuth.initBackgroundPage({
    'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
    'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
    'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
    'consumer_key': 'anonymous',
    'consumer_secret': 'anonymous',
    'scope': 'https://picasaweb.google.com/data/',
    'app_name': 'My Hangouts Extension'
  });
  this.oauth.authorize(this.onAuthorized.bind(this));
};

CapturePicasaUploader.prototype.onAuthorized = function() {
  console.log('Authorized!');
};

CapturePicasaUploader.prototype.getAlbums = function() {
  var url = 'https://picasaweb.google.com/data/feed/api/user/default';
  this.oauth.sendSignedRequest(url, function(data) {
    console.log(data);
  }, { 'parameters' : {'alt' : 'json'}});
};