const axios = require('axios');

async function Igstalk(username, sessionId = '') {
  try {
    const opt = {
      headers: {
        "cache-control": "no-cache",
        'user-agent': "Instagram 10.8.0 Android (18/4.3; 320dpi; 720x1280; Xiaomi; HM 1SW; armani; qcom; en_US)",
        'cookie': `${sessionId}`,
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,pt;q=0.6,ru;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'pragma': 'no-cache',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1'
      }
    };
    const { data } = await axios.get('https://www.instagram.com/' + username + '/?__a=1', opt);
    const metaData = data.graphql.user;
    const final = {
      username: metaData.username,
      full_name: metaData.full_name,
      profile_id: metaData.id,
      biography: metaData.biography,
      followers: metaData.edge_follow.count,
      following: metaData.edge_followed_by.count,
      external_url: metaData.external_url,
      is_private: metaData.is_private,
      is_verified: metaData.is_verified,
      profile_pic_url_hd: metaData.profile_pic_url_hd,
      posts: metaData.edge_owner_to_timeline_media.edges.map(x => 'https://www.instagram.com/p/' + x.node.shortcode)
    };
    return final;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { Igstalk }