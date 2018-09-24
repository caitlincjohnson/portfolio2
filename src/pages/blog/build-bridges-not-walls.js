import React, { Component } from 'react';

class BuildBridgesBlogPost extends Component {
  render() {
    return (
      <div className="pagePadding">
        <h1>Build Bridges, Not Walls.</h1>
        <p style={{padding: "0"}}>July 18, 2018</p>
        <blog>
          <img className="img-post" src="/assets/blogs/post3/border.jpg" alt="San Diego Tijuana Border" style={{float: "left"}} />
          <blockquote cite="Vanishing Frontiers by Andrew"><em>"And while people far away from the border argue about how to close it off, residents of San Diego and Tijuana are plotting to build bridges across it - by sharing airports, cultural offerings, businesses and even sporting events - so that they can accomplish even more together." - Vanishing Frontiers by Andrew Selee</em></blockquote>
          <p>As a continuation of my observations about San Diego Startup Week, I wanted to touch upon what I believe is San Diego’s most unique aspect about the city: Tijuana. Yes, I truly believe that the best thing about San Diego has nothing to do with the amazing weather, but rather, its proximity to Tijuana that allows it to act as the gateway to Latin America. For those unfamiliar with the layout of the area, it takes about 20-25 minutes on a good day for me to get from downtown San Diego to Zona Río in Tijuana (okay, maybe I go a little above the speed limit). Not only does Bloomberg value the San Diego-Tijuana connection at $230 billion [1], but according to the Binational Committee on Regional Opportunities, the main border crossing between the two cities is the busiest international crossing in the world [2].</p>
          <break />
          <p>And San Diego has noticed within recent years according to Andrew Selee, with the following excerpt from his book, Vanishing Frontiers:</p>
          <break />
          <p>In mid-2012, a poll conducted by the San Diego Foundation showed that only 9 percent of San Diego’s residents thought their city’s future was closely tied to Tijuana’s […] Three years later, a second poll conducted by the University of California, San Diego, found that more than 70 percent of San Diego residents saw Tijuana as a major part of their future.</p>
          <break />
          <img className="img-post" src="/assets/blogs/post3/cross_border_xpress_4.jpg" alt="Cross Border Xpress" style={{float: "right"}} />
          <p>All in all, San Diego is in a prime location with easy access to Tijuana. Yet, based on my observations and discussions at San Diego Startup Week, it appears that most of us “talk the talk” when it comes to building relationships with our southern neighbor, but only a few of us actually “walk the walk”. The conference did have a binational track that consisted of a handful of speakers that are actively engaged with both countries along the wall, which was the primary reason why I attended the conference itself given my aspirations to create a global startup; however, I was surprised at the low number of San Diegans that have ventured south of the border. I was even more surprised by the low number of San Diegans that have interacted with Tijuanese (local slang for residents of Tijuana) for their startups. And I was especially surprised by the lack of acknowledgement of Tijuana’s existence by San Diegan conference speakers during their session about San Diego’s ecosystem (until someone in the audience called them out for it).</p>
          <break />
          <p>Before this turns into a diatribe, I want to explain why San Diegan startups need to pay more attention to Tijuana. The city itself is full of global companies that provide an abundance of resources to the startup community, such as <a style={{fontSize: "1rem"}} href="http://www.sandiegouniontribune.com/news/border-baja-california/sd-me-tijuana-innovadora-20161025-story.html">Tijuana Innovadora</a>, a biennial mega-conference hosted by well-established companies that promotes innovation in Tijuana and provides startups an opportunity to market themselves. Additionally, companies in Tijuana are supported by at least 8,000 professional, scientific and technical service providers, and startups have access to numerous incubators, accelerators and coworking spaces [3]. Sure, it’s cheaper there, which I can appreciate as a huge benefit for startups, but I caution in letting that overshadow the numerous additional benefits that Tijuana can provide to San Diegan startups.</p>
          <break />
          <img className="img-post" src="/assets/blogs/post3/world-in-2050-image1.png" alt="Emerging markets in 2050" style={{float: "left"}} />
          <p>And most importantly, if a startup is a business that is designed to scale and grow rapidly, then why stop at the border? Why not leverage the market in Tijuana to expand into Mexico and eventually the rest of Latin America? The consumer markets in United States and Mexico are more intertwined than believed, and American companies are continuously finding success selling their products within the Mexican market. And Mexico is predicted to be a top 10 global economy by 2050, which gives startups all the more reason to establish their footprint across the border [4].</p>
          <break />
          <p>In summary, while heavy collaboration exists between Tijuana and San Diego within well-established companies and government bodies, it appears almost non-existent within the San Diego startup ecosystem. Let’s take it upon ourselves to be more engaged with our southern neighbor and continue to build more bridges over the wall.</p>
          <break />
          <a style={{float: "left", fontSize: ".8rem"}} href="https://www.weforum.org/agenda/2015/05/tijuana-and-the-future-of-trade/">1. https://www.weforum.org/agenda/2015/05/tijuana-and-the-future-of-trade/</a>
          <a style={{float: "left", fontSize: ".8rem"}} href="http://businessconexion.info/en/border-crossings-and-trade-statistics-between-san-diego-and-baja-california/">2. http://businessconexion.info/en/border-crossings-and-trade-statistics-between-san-diego-and-baja-california/</a>
          <a style={{float: "left", fontSize: ".8rem"}} href="https://usmex.ucsd.edu/_files/frontera-friday/tijuana-regional-profile-2017.pdf">3. https://usmex.ucsd.edu/_files/frontera-friday/tijuana-regional-profile-2017.pdf</a>
          <a style={{float: "left", fontSize: ".8rem"}} href="https://www.pwc.com/gx/en/issues/economy/the-world-in-2050.html">4. https://www.pwc.com/gx/en/issues/economy/the-world-in-2050.html</a>
        </blog>
      </div>
    );
  }
}

export default BuildBridgesBlogPost;
