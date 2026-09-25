import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Expedition 60/4", "img/projects/Exp60_4_Showcase_2.gif",
    `
    <div class="paragraph">
     <strong>Expedition 60/4</strong> is a solodev project I've worked on for two months after the release of </br>
     Clair Obscur : Expedition 33. My favorite project so far.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Cc2TdNXlTKo?si=g8LOADXbhnMRDtDh" frameborder="0" allowfullscreen></iframe>
    </div>
    

    <div class="paragraph">
        Inspired by <a href="https://store.steampowered.com/agecheck/app/1903340/">this recent masterpiece</a> which to me represents the 10th art in all its glory,</br>
        I had to pay tribute to it and use my skillset , and Unity visual assets to solodev a demo showcasing similar gameplay mechanics.</br>
        </br>
        Three new members join the team of this <strong>Turn-Based RPG</strong>, each with a unique mechanic and a full set of synergistic abilities, all featuring their own cinematic sequences.</br>
        </br>
        On the technical side, includes:</br>
        <ul>
            <li><strong>State Machines</strong> (hierarchical & automated) for world exploration and turn-based management</li>
            <li><strong>Node-based logic</strong> for abilities and their effects</li>
            <li><strong>Additive scene management</strong> with animated transitions</li>
            <li>A sprinkle of <strong>SOAP</strong> here and there</li>
            <li>Dynamic Timelines with <strong>custom Playables</strong> for abilities and their visual feedback</li>
        </ul>

    </div>


    `, "#23bd69", true, true),
    new ProjectData("project-2", "Casual Action/Arcade games", "img/projects/AAGames.gif", `
    <div class="paragraph">
        The following are games made during my time at <strong>Yso Corp</strong> while aiming to do bigger scopes than Hypercasual games.</br>
        Each game took around 1 month to produce the coreloop.
    </div>
    <hr>
    
    <div class="paragraph center">
        <div class="hc-title">Heroes of fate</div>
        <iframe class="youtube-center" src="https://www.youtube.com/embed/v8o1fibSaO0?si=L-wx0IYgeEzTRWv0" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Inspired by the classic <strong>deck builders</strong>, this game had the original mechanic to control 3 members of a team instead of one. </br>
        3 Decks to build with synergies between decks and swapping mechanics</br>
        It Truly was a blast to discover the coding architecture for <strong>Card based RPGs</strong>, and <strong>dialog systems</strong> for a tint of narrative.
    </div>

    <hr>

    <div class="paragraph center">
        <div class="hc-title">Monster Kart</div>
        <iframe class="youtube-center" src="https://www.youtube.com/embed/HRE6v7Z96m8" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        A <strong>Racing game</strong> which codebase includes the cartoony physics, spline-based tracking and even an ability system. </br>
        <font size="2">It is Hard to describe its inspiration without having lawyers from a certain company at my door present.</br></font>
        It was really fun to make!
    </div>

    <hr>

    <div class="paragraph center">
        <div class="hc-title">Gladiator Arena</div>
        <iframe class="youtube-center" src="https://www.youtube.com/embed/wBTPRNwNJnE?si=RWlKG1juEmfD2O5z" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        A short project featuring a 1v1 <strong>PlayerVsAI</strong> game between gladiators, </br>
        with a Complex <strong>Behaviour tree AI</strong> integrated into the opponent.</br>
        2 Weapons for 2 different movesets, including parries and blocks.</br>
        Not a very deep fighting system but it showed me the basic structure to adopt.
    </div>

    <hr>

    <div class="paragraph center">
        <div class="hc-title">Gladiator Survivor</div>
        <iframe class="youtube-center" src="https://www.youtube.com/embed/jI6FLNXUMV8?si=B176ofjTouD1eiex" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
       Same theme, different concept. This time inspired by the survivor-likes such as <a href="https://store.steampowered.com/app/2066020/Soulstone_Survivors/"> Soulstone survivors. </a> <br>
       Made with an <strong>automatic ability system</strong> and a <strong>wave system</strong>, along with the classical <strong>RPG system</strong>.<br>
       This pet project mainly aimed to push the limits of game optimization, to see how many enemy soldiers and Vfxs I could have running simultaneously.<br>
       I managed to play with <strong>GPU Skinning</strong> (also called Texture-based animation), and also fiddled with DOTS Animation.<br>
    </div>

    <hr>

    `, "#5a78af",false, true),
    new ProjectData("project-3", "Casual games", "img/projects/Puzzles.gif", `

    <div class="paragraph">
        The following are games made during my time at <strong>Voodoo</strong>, </br>
        in a studio focused on <strong>Casual games</strong>.</br>
        Each game took around 1/1.5 month to produce the coreloop, Level design tools and infinite durability.</br>
        I'm pretty satisfied with the results with cool visual feedbacks and overall juiciness, despite the lack of success due to a saturated marketplace.
    </div>

    <hr>

    <div class="paragraph">
        <div class="hc-left">
            <iframe class="youtube-hc" width="400" src="img/projects/Farming_Rescute.mp4" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="hc-right">
            <div class="hc-title">Farming Rescute</div>
                Match 3D tiles to rescue adorable animal. (also exists with cute slimes) </br> 
                Navigate through layers and columns in this column-based gameplay!<br>
                Simple tap controls and make it perfect for puzzle enthusiasts of all ages.<br>
                I did a lot of work on the <strong>visual juiciness</strong> of this game, </br>
                rendering it <strong>fluid</strong> and <strong>polished</strong>.
            <br><br><br>
            <a href="https://apps.apple.com/ci/app/farming-rescute/id6477826687" target="_blank"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" style="height:60px;"></a>
        </div>
        <div style="clear:both"></div>
    </div>

    <hr>

    <div class="paragraph">
        <div class="hc-left">
            <iframe class="youtube-hc" src="img/projects/TilesSpread.mp4" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="hc-right">
            <div class="hc-title">Tiles Spread</div>
            A vibrant puzzle experience<br>
            that challenges you to place stacks on the hexagonal board <br>
            to deploy them and collect tiles—before you run out of space. <br>
            I also focused a lot of work on the <strong>fluidity</strong> of this game,<br>
            to be able to spam the board freely. <br>

            <br><br><br>
            <a href="https://apps.apple.com/us/app/tiles-spread/id6740765195?ct=Tap33800767" target="_blank"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" style="height:60px;"></a>
        </div>
        <div style="clear:both"></div>
        
    </div>
    
    <hr>
    
    <div class="paragraph">
        <div class="hc-left">
            <iframe class="youtube-hc" width="400" src="img/projects/SeatBlocks.mp4" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="hc-right">
            <div class="hc-title">Seat Blocks</div>
            Seat Blocks is a puzzle game that challenges you to arrange passengers<br>
            in their correctly colored seats—before you run out of moves.<br>
            A lot of thoughts went into the <strong>custom pathfinding algorithm</strong> of this game! <br>
            I also implemented cool visual perks on the characters.

            <br><br><br>
            <a href="https://apps.apple.com/us/app/seat-blocks/id6739045435" target="_blank"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" style="height:60px;"></a>
        </div>
        <div style="clear:both"></div>
    </div>

    <hr>

    <div class="paragraph">
        <div class="hc-left">
            <iframe class="youtube-hc" width="400" src="img/projects/Popit.mp4" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="hc-right">
            <div class="hc-title">Pop it Jam</div>
                Aim and throw the right colored darts to pop balloons, <br>
                free the ropes, and complete each level. <br>
                An action-packed puzzle game that blends fun with brain training!<br>
                I'm pretty satisfied wit hthe <strong>fluidity</strong> of the <strong>physics</strong> on this one.<br>
            <br><br><br>
            <a href="https://apps.apple.com/ci/app/pop-it-jam/id6698897769" target="_blank"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" style="height:60px;"></a>
        </div>
        <div style="clear:both"></div>
    </div>


    <hr>


    <div class="paragraph">
        <div class="hc-left">
                <iframe class="youtube-hc" width="400" src="https://youtube.com/embed/GVlinmY7EzE" frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="hc-right">
                <br><br>
                I'm also very proud of my Level Editor tools I made <br>
                to speed up the Level Design process, made with <strong>custom Unity Editors</strong> or <strong>Odin</strong>.
                <br><br><br>
            </div>
            <div style="clear:both"></div>
        </div>
    <div style="clear:both"></div>

    `, "#383838", true, false),
    new ProjectData("project-4", "Hypercasual games", "img/projects/SG_trailer.gif", `

    <div class="paragraph">
        The following games marks my <i>débuts</i> as a gameplay programmer. Most of those games' coreloop were made in a very short timespan (from 2 days to one week) and most of them were made in solo. <br>
        Their primary focus were to reach a low enough "Cost per Install" to keep working on the gameplay and monetisation. <br>
    </div>

    <div class="paragraph center">
        <div class="hc-title">Stretch Guy</div>
        <iframe class="youtube" src="https://www.youtube.com/embed/bq5aXkLZ-Gw" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
            One of my earliest game made, yet my biggest success, marking the biggest hit of <strong>Yso Corp</strong> so far with <strong>100M+ Downloads.</strong><br>
            Quite the simple concept of one character stretching its limbs, <br>
            yet a complex <strong>physics-based rope system</strong> and <strong>GPE interaction system</strong> I'm truly proud of (Anything can interact with anything!). It kept the gameplay both simple and varied.
    </div>

    <div class="paragraph center">
    <a href="https://play.google.com/store/apps/details?id=com.YsoCorp.StretchGuy&hl=fr" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" style="height:80px;"></a>
    <a href="https://apps.apple.com/fr/app/stretch-guy/id1535922800" target="_blank"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" style="height:80px;"></a>
    </div>

    <hr>

    <div class="paragraph">
        <div class="hc-left">
            <div>
                <iframe class="youtube-hc"src="https://www.youtube.com/embed/kJjkUEezuA4" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

        <div class="hc-right">
            <div class="hc-title">Spider Guy</div>
                Stretch Guy's little brother. <br>
                Had way less success, but I was so proud of its physics. <br>
                The gameplay could benefit from a better design, but its interaction system was spotless.
            </div>
        </div>
        <div style="clear:both"></div>
    </div>

    <hr>

    <div class="paragraph">
        <div class="hc-left">
            <div>
                <iframe class="youtube-hc" src="https://www.youtube.com/embed/xUkXdp0uH7I" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

        <div class="hc-right">
            <div class="hc-title">Little Robot</div>
                Ratchet and clank meets Crash of the titans. <font size="2"> +2 points of nostalgia</font> <br><br>
                Use different weapons to destroy everything and take control of defeated robots!<br>
                I really enjoyed working on its <strong>projectile system</strong>, which made it possible <br>
                to create a wide variety of fun and creative weapons.<br>
                A good improvement axis would be to have a less linear Level Design, <br>
                which was the standard for hypercasual games at that time.<br>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>

    <hr>

    <div class="paragraph">
        <div class="hc-left">
            <div>
                <iframe class="youtube-hc" src="img/projects/ForkLift-Showcase.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

        <div class="hc-right">
            <div class="hc-title">Forklift Royale</div>
                A very simple concept of throwing your opponents off the arena with forklifts.<br>
                It could be a top contender for a Marioparty minigame, or to get your forklift license.
            </div>
        </div>
        <div style="clear:both"></div>
    </div>

    <hr>
    <div class="paragraph center">
        <div class="hc-title">Unfinished games</div> <br>
    </div>

    <div class="paragraph">
        <div class="hc-left">
            <div>
                <iframe class="youtube-hc" src="img/projects/Dragon Adventure.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

        <div class="hc-right">
            <div class="hc-title">Dragon rider</div>
                A cool controller I made inspired by World of Warcraft's mechanic.<br>
                I believe there is room to explore here for a concept with a proper environment <br>
                (without the glitching LODs).
            </div>
        </div>
        <div style="clear:both"></div>
    </div>

    <hr>

    <div class="paragraph">
        <div class="hc-left">
            <div>
                <iframe class="youtube-hc" src="img/projects/RollHill.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

        <div class="hc-right">
            <div class="hc-title">Roll down the hill</div>
                A race of ragdolls. <br>
                You may think it is a dumb concept <sub><small>and you'd be right</sub></small> but this prototype was ahead of its time <br>
                way before <a href="https://store.steampowered.com/app/3809440/Cheese_Rolling/">This game's</a> success.
            </div>
        </div>
        <div style="clear:both"></div>
    </div>

    <hr>

    <div class="paragraph">
        And A couple dozens of unfinished stuff I'm not proud of 🙈
    </div>

    `, "#e80fb7", true, false),
    new ProjectData("project-5", "Nintendo Switch porting", "img/projects/Toonsters_Trailer.gif", `
    <div class="paragraph center">
        I ported Yso Corp's mobile game, <a href="https://play.google.com/store/apps/details?id=com.YsoCorp.MonsterBox2&hl=fr"> Toonsters: Crossing Worlds </a> to Nintendo Switch.</br>
        Using Nintendo SDK for Unity, with a touch of added <strong>C++</strong> for some of the console's specific behaviours. </br>
        I also handled the publishing side with <strong>NDI</strong>(Nintendo Developer Interface)</br>

        
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/bY0MDlcQR98?si=pkiLBm-Gg73ifUAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        Since the UI On a Nintendo Switch is tactile, similar to a phone, but also analogic, I had to refactor the whole game's UI. <font size="1">(which took me some time since the game's code was a bit spaghettified)</font-size>
    </div>
    `, "#f23427", false, true)
];
