import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  articleTitle = 'Avoiding bad breath';
  articleAuthor = 'John Doe';
  articleDate = 'May 10, 2016';
  articleCategory = 'Dental';
  articleContent = `<h4>Bad breath is a deal breaker both in business and in personal life of ours. And while breath fresheners
            or candies hide it, they do not cure the very problem at hand...</h4>
          <p>So, most importantly, the bad breath is caused by a lack of oral hygiene. It includes sleeping with an open mouth
            at night. This makes mouth dry and bacterias began to flourish there and cause that smell...</p>
          <img src="assets/img/post-default-01-770x562.jpg" alt="">
          <p>Bad breath has a medical name "halitosis". This kind of condition can stem from poor oral hygiene habits. It also may
            be a telling sign of other health problems. What you're eating can cause this disease to progress much faster. So how
            healthy your menu is directly correlated with any oral hygiene problems.
          </p>
          <p class="text-extra-bold text-gray-light">So, how your diet and dishes choice affects the smell of your breath?</p>
          <p>Essentially, everything you're consuming begins to be broken down into parts in your mouth. As dishes are digested and
            absorbed into the blood system, foods eventually get carried to your lungs. Then it reveals in your breath. This is even
            more true in case you like foods with strong odors (such as garlic or onions). Then teeth brushing and flossing, even
            mouthwash and any other breath freshening liquids are redundant. They merely disguise that kind of odor temporarily.
            The odor will not go away completely until the foods have passed through your body completely...</p>

          <p>Quote</p>

          <p class="text-extra-bold text-gray-light">Which poor oral hygiene habits lead to the bad breath?</p>
          <p>First off, ask yourself do you regularly follow basic oral hygiene routines? This, of course, includes such morning
            musts as brushing your teeth twice a day. Keep in mind, that each brushing should be lasting for at least 5 minutes.
            It's not limited to that. Teeth flossing after each eating is also strongly recommended. Because when you eat and
            don't follow these methods, food particles stay in your mouth. They get stuck in between the teeth, on gums and the
            tongue. Then it decays and absorbs there, causing various oral bacteria to flourish. All this results in a bad breath.
            Antibacterial mouth rinsers, instead of simple breath fresheners, may be of a big help here.</p>
          <p class="italic">It will not simply disguise the smell by replacing it with a nicer aroma. These antibacterial mouth rinsers will
            eventually fight off and kick out the bacteria from your mouth. As well as off the teeth, gums and tongue.</p>
          <p>To add to that you must keep an especially attentive eye on your dentures, if you have any. They are critically vulnerable
            towards the odor-causing bacteria. If the dentures are not cleaned properly, and even more importantly, regularly, it will
            get covered with invisible bacteria. This will be causing bad smells, that will be obvious to absolutely everyone around.
            There's also no better way to hazard you oral hygiene and health than smoking or chewing tobacco. Besides irritating the
            sensitive gums and making teeth yellow, this makes the bacterias prosper. It adds up to a smell too...</p>

          <p class="text-extra-bold text-gray-light">Are there any specific health issues that are connected to a bad breath?</p>
          <p>Such a thing as the periodontal disease may be an essential cause of the bad breath. So if smell and unpleasant taste in
            your mouth are a lasting issue, you'd better check with your dentist. Specifically on the matter of whether you have
            periodontal disease or not. Gum disease is caused by the appearance of plaque on teeth. Bacteria cause the formation
            of toxins to form, which irritate the gums and enamel. If such a gum disease carries on without any treatment to it
            provided, it can damage the gums and jawbone. Other dental causes of bad breath include poorly fitting dental appliances,
            yeast infections of the mouth, and dental caries (cavities).</p>
          <p>The medical condition of the dry mouth (also called xerostomia) also can cause a bad smell. Saliva is necessary to moisten
            the mouth. It neutralizes acids produced by plaque and piles away the dead cells off the tongue, gums, and cheeks' insides.
            If not removed, these cells begin to decay and can cause bad breath. Dry mouth may be a side effect of various medications.
            Also salivary gland problems or breathing with your mouth open can be an additional cause. Many other general diseases and
            illnesses may cause bad breath. Here are some to be aware of: respiratory tract infections such as pneumonia or bronchitis,
            chronic sinus infections, postnasal drip, diabetes, chronic acid reflux, and liver or kidney problems.</p>
  `;
  articleTags = ['Dental', 'Breath', 'Oral Health'];
  articleCommentCount = '31';

  constructor() { }

  ngOnInit() {
  }

}
