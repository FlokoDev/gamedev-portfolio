<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Kotecki Florian</strong>, a Gameplay programmer with <strong>6 years</strong> of experience. <br/>
        I've been coding for one of the biggest mobile game publisher in the world, and worked on games that totalled over <strong>200 Million Downloads</strong>.<br/>
      </div>

      <div style="margin-top: 20px;">I’ve worked on a wide variety of games using <strong>Unity and Unreal</strong>, on platforms such as<strong> Mobile, PC and Nintendo Switch</strong>.<br/>
      This portfolio showcases a few of those <router-link to="/game-projects"><strong><font size="5">Games I made</font></strong></router-link> I'm proud of displaying.</div> <br/><br/>

      I've always been passionate about playing, discussing, designing and developing video games. I dedicated my career to this field and attend to keep evolving within it.<br/><br/>

      <div style="margin-top: 40px;"><strong>I'm currently working as a Freelancer part-time, and I remain open for new opportunities.</strong> You can reach me at <a href="mailto:flo.kotecki@gmail.com">flo.kotecki@gmail.com</a> or <router-link to="/contact">get in touch here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Florian" height="224" width="224"/> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>

a {
  color: rgb(6, 2, 255);
  text-decoration: underline;
  opacity: 0.5;
}

.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>