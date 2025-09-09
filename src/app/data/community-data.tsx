import { Community } from "@dh_sheets/app/types";

export const CommunitiesList: Community[] = [
    {
        name: "Highborne",
        background:
            "Being part of a highborne community means you're accustomed to a life of elegance, opulence, and prestige within the upper echelons of society. Traditionally, members of a highborne community possess incredible material wealth. While this can take a variety of forms depending on the community—including gold and other minerals, land, or controlling the means of production—this status always comes with power and influence. Highborne place great value on titles and possessions, and there is little social mobility within their ranks. Members of a highborne community often control the political and economic status of the areas in which they live due to their ability to influence people and the economy with their substantial wealth. The health and safety of the less affluent people who live in these locations often hinges on the ability of this highborne ruling class to prioritize the well-being of their subjects over profit.",
        rolePlayTips:
            "Highborne are often amiable, candid, conniving, enterprising, ostentatious, and unflappable.",
        ability: {
            name: "Privelege",
            description: [
                <span key="community-ability-description">
                    You have advantage on rolls to consort with nobles,
                    negotiate prices, or leverage your reputation to get what
                    you want.
                </span>,
            ],
        },
    },
    {
        name: "Loreborne",
        background:
            "Being part of a loreborne community means you’re from a society that favors strong academic or political prowess. Loreborne communities highly value knowledge, frequently in the form of historical preservation, political advancement, scientific study, skill development, or lore and mythology compilation. Most members of these communities research in institutions built in bastions of civilization, while some eclectic few thrive in gathering information from the natural world. Some may be isolationists, operating in smaller enclaves, schools, or guilds and following their own unique ethos. Others still wield their knowledge on a larger scale, making deft political maneuvers across governmental landscapes.",
        rolePlayTips:
            "Loreborne are often direct, eloquent, inquisitive, patient, rhapsodic, and witty.",
        ability: {
            name: "Well-Read",
            description: [
                <span key="community-ability-description">
                    You have advantage on rolls that involve the history,
                    culture, or politics of a prominent person or place.
                </span>,
            ],
        },
    },
    {
        name: "Orderborne",
        background:
            "Being part of an orderborne community means you’re from a collective that focuses on discipline or faith, and you uphold a set of principles that reflect your experience there. Orderborne are frequently some of the most powerful among the surrounding communities. By aligning the members of their society around a common value or goal, such as a god, doctrine, ethos, or even a shared business or trade, the ruling bodies of these enclaves are able to mobilize larger populations with less effort. While orderborne communities take a variety of forms—some even profoundly pacifistic—perhaps the most feared are those that structure themselves around military prowess. In such a case, it’s not uncommon for orderborne to provide soldiers for hire to other cities or countries.",
        rolePlayTips:
            "Orderborne are often ambitious, enevolent, pensive, prudent, sardonic, and stoic.",
        ability: {
            name: "Dedicated",
            description: [
                <span key="community-ability-description">
                    Record three sayings or values your upbringing instilled in
                    you. Once per rest, when you describe how you’re embodying
                    one of these principles through your current action, you can
                    roll a<b>d20</b> as your Hope Die.
                </span>,
            ],
        },
    },
    {
        name: "Ridgeborne",
        background:
            "Being part of a ridgeborne community means you’ve called the rocky peaks and sharp cliffs of the mountainside home. Those who’ve lived in the mountains often consider themselves hardier than most because they’ve thrived among the most dangerous terrain many continents have to offer. These groups are adept at adaptation, developing unique technologies and equipment to move both people and products across difficult terrain. As such, ridgeborne grow up scrambling and climbing, making them sturdy and strong-willed. Ridgeborne localities appear in a variety of forms—some cities carve out entire cliff faces, others construct castles of stone, and still more live in small homes on windblown peaks. Outside forces often struggle to attack ridgeborne groups, as the small militias and large military forces of the mountains are adept at utilizing their high-ground advantage.",
        rolePlayTips:
            "Ridgeborne are often bold, hardy, indomitable, loyal, reserved, and stubborn.",
        ability: {
            name: "Steady",
            description: [
                <span key="community-ability-description">
                    You have advantage on rolls to traverse dangerous cliffs and
                    ledges, navigate harsh environments, and use your survival
                    knowledge.
                </span>,
            ],
        },
    },
    {
        name: "Seaborne",
        background:
            "Being part of a seaborne community means you lived on or near a large body of water. Seaborne communities are built, both physically and culturally, around the specific waters they call home. Some of these groups live along the shore, constructing ports for locals and travelers alike. These harbors function as centers of commerce, tourist attractions, or even just a safe place to lay down one’s head after weeks of travel. Other seaborne live on the water in small boats or large ships, with the idea of “home” comprising a ship and its crew, rather than any one landmass. No matter their exact location, seaborne communities are closely tied to the ocean tides and the creatures who inhabit them. Seaborne learn to fish at a young age, and train from birth to hold their breath and swim in even the most tumultuous waters. Individuals from these groups are highly sought after for their sailing skills, and many become captains of vessels, whether within their own community, working for another, or even at the helm of a powerful naval operation.",
        rolePlayTips:
            "Seaborne are often candid, cooperative, exuberant, fierce, resolute, and weathered.",
        ability: {
            name: "Know the Tide",
            description: [
                <span key="community-ability-description">
                    You can sense the ebb and flow of life. When you roll with
                    Fear, place a token on your community card. You can hold a
                    number of tokens equal to your level. Before you make an
                    action roll, you can spend any number of these tokens to
                    gain a +1 bonus to the roll for each token spent. At the end
                    of each session, clear all unspent tokens.
                </span>,
            ],
        },
    },
    {
        name: "Slyborne",
        background:
            "Being part of a slyborne community means you come from a group that operates outside the law, including all manner of criminals, grifters, and con artists. Members of slyborne communities are brought together by their disreputable goals and their clever means of achieving them. Many people in these communities have an array of unscrupulous skills: forging, thievery, smuggling, and violence. People of any social class can be slyborne, from those who have garnered vast wealth and influence to those without a coin to their name. To the outside eye, slyborne might appear to be ruffians with no loyalty, but these communities possess some of the strictest codes of honor which, when broken, can result in a terrifying end for the transgressor.",
        rolePlayTips:
            "Slyborne are often calculating, clever, formidable, perceptive, shrewd, and tenacious.",
        ability: {
            name: "Scoundrel",
            description: [
                <span key="community-ability-description">
                    You have advantage on rolls to negotiate with criminals,
                    detect lies, or find a safe place to hide.
                </span>,
            ],
        },
    },
    {
        name: "Underborne",
        background:
            "Being part of an underborne community means you’re from a subterranean society. Many underborne live right beneath the cities and villages of other collectives, while some live much deeper. These communities range from small family groups in burrows to massive metropolises in caverns of stone. In many locales, underborne are recognized for their incredible boldness and skill that enable great feats of architecture and engineering. Underborne are regularly hired for their bravery, as even the least daring among them has likely encountered formidable belowground beasts, and learning to dispatch such creatures is common practice amongst these societies. Because of the dangers of their environment, many underborne communities develop unique nonverbal languages that prove equally useful on the surface.",
        rolePlayTips:
            "Underborne are often composed, elusive, indomitable, innovative, resourceful, and unpretentious.",
        ability: {
            name: "Low-Light Living",
            description: [
                <span key="community-ability-description">
                    When you’re in an area with low light or heavy shadow, you
                    have advantage on rolls to hide, investigate, or perceive
                    details within that area.
                </span>,
            ],
        },
    },
    {
        name: "Wanderborne",
        background:
            "Being part of a wanderborne community means you’ve lived as a nomad, forgoing a permanent home and experiencing a wide variety of cultures. Unlike many communities that are defined by their locale, wanderborne are defined by their traveling lifestyle. Because of their frequent migration, wanderborne put less value on the accumulation of material possessions in favor of acquiring information, skills, and connections. While some wanderborne are allied by a common ethos, such as a religion or a set of political or economic values, others come together after shared tragedy, such as the loss of their home or land. No matter the reason, the dangers posed by life on the road and the choice to continue down that road together mean that wanderborne are known for their unwavering loyalty.",
        rolePlayTips:
            "Wanderborne are often inscrutable, magnanimous, mirthful, reliable, savvy, and unorthodox.",
        ability: {
            name: "Nomadic Pack",
            description: [
                <span key="community-ability-description">
                    Add a Nomadic Pack to your inventory. Once per session, you
                    can <b>spend a Hope</b> to reach into this pack and pull out
                    a mundane item that’s useful to your situation. Work with
                    the GM to figure out what item you take out.
                </span>,
            ],
        },
    },
    {
        name: "Wildborne",
        background:
            "Being part of a wildborne community means you lived deep within the forest. Wildborne communities are defined by their dedication to the conservation of their homelands, and many have strong religious or cultural ties to the fauna they live among. This results in unique architectural and technological advancements that favor sustainability over short-term, high-yield results. It is a hallmark of wildborne societies to integrate their villages and cities with the natural environment and avoid disturbing the lives of the plants and animals. While some construct their lodgings high in the branches of trees, others establish their homes on the ground beneath the forest canopy. It’s not uncommon for wildborne to remain reclusive and hidden within their woodland homes.",
        rolePlayTips:
            "Wildborne are often hardy, loyal, nurturing, reclusive, sagacious, and vibrant.",
        ability: {
            name: "Lightfoot",
            description: [
                <span key="community-ability-description">
                    Your movement is naturally silent. You have advantage on
                    rolls to move without being heard.
                </span>,
            ],
        },
    },
];
