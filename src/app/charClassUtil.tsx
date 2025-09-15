import { CharClass, Domains } from "@dh_sheets/app/constants";
import { BardSubclassData, DruidSubclassData, GuardianSubclassData } from "@dh_sheets/app/data/subclass-data";
import { Ability, SubclassData } from "@dh_sheets/app/types";

export function getBaseEvasionByClass(className: CharClass) {
    switch (className) {
        case CharClass.BARD:
            return 10;
        case CharClass.DRUID:
            return 10;
        case CharClass.GUARDIAN:
            return 9;
        case CharClass.RANGER:
            return 12;
        case CharClass.ROGUE:
            return 12;
        case CharClass.SERAPH:
            return 9;
        case CharClass.SORCERER:
            return 10;
        case CharClass.WARRIOR:
            return 11;
        case CharClass.WIZARD:
            return 11;
    }
}

export function getBaseHpByClass(className: CharClass) {
    switch (className) {
        case CharClass.BARD:
            return 5;
        case CharClass.DRUID:
            return 6;
        case CharClass.GUARDIAN:
            return 7;
        case CharClass.RANGER:
            return 6;
        case CharClass.ROGUE:
            return 6;
        case CharClass.SERAPH:
            return 7;
        case CharClass.SORCERER:
            return 6;
        case CharClass.WARRIOR:
            return 6;
        case CharClass.WIZARD:
            return 5;
    }
}

export function getStartingItemsByClass(className: CharClass): string {
    switch (className) {
        case CharClass.BARD:
            return "A romance novel or a letter never opened";
        case CharClass.DRUID:
            return "A small bag of rocks and bones or a strange pendant found in the dirt";
        case CharClass.GUARDIAN:
            return "A totem from your mentor or a secret key";
        case CharClass.RANGER:
            return "A trophy from your first kill or a seemingly broken compass";
        case CharClass.ROGUE:
            return "A set of forgery tools or a grappling hook";
        case CharClass.SERAPH:
            return "A bundle of offerings or a sigil of your god";
        case CharClass.SORCERER:
            return "A whispering orb or a family heirloom";
        case CharClass.WARRIOR:
            return "The drawing of a lover or a sharpening stone";
        case CharClass.WIZARD:
            return "A book you’re trying to translate or a tiny, harmless elemental pet";
    }
}

export function getDomainsByClass(className: CharClass): Domains[] {
    switch (className) {
        case CharClass.BARD:
            return [Domains.CODEX, Domains.GRACE];
        case CharClass.DRUID:
            return [Domains.SAGE, Domains.ARCANA];
        case CharClass.GUARDIAN:
            return [Domains.VALOR, Domains.BLADE];
        case CharClass.RANGER:
            return [Domains.BONE, Domains.SAGE];
        case CharClass.ROGUE:
            return [Domains.MIDNIGHT, Domains.GRACE];
        case CharClass.SERAPH:
            return [Domains.SPLENDOR, Domains.VALOR];
        case CharClass.SORCERER:
            return [Domains.ARCANA, Domains.MIDNIGHT];
        case CharClass.WARRIOR:
            return [Domains.BLADE, Domains.BONE];
        case CharClass.WIZARD:
            return [Domains.CODEX, Domains.SPLENDOR];
    }
}

export function getSubclassesByClass(className: CharClass): SubclassData[] {
    switch(className) {
        case CharClass.BARD:
            return BardSubclassData;
        case CharClass.DRUID:
            return DruidSubclassData;
        case CharClass.GUARDIAN:
            return GuardianSubclassData;
        case CharClass.RANGER:
        case CharClass.ROGUE:
        case CharClass.SERAPH:
        case CharClass.SORCERER:
        case CharClass.WARRIOR:
        case CharClass.WIZARD:
    }
    return [];
}

export function getHopeFeatureByClass(className: CharClass): Ability {
    switch (className) {
        case CharClass.BARD:
            return {
                name: "Make a Scene",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> to temporarily <i>Distract</i> a
                        target within Close range, giving them a -2 penalty to
                        their Difficulty.
                    </span>,
                ],
            };
        case CharClass.DRUID:
            return {
                name: "Evolution",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> to transform into a Beastform
                        without marking a Stress. When you do, choose one trait
                        to raise by +1 until you drop out of that Beastform.
                    </span>,
                ],
            };
        case CharClass.GUARDIAN:
            return {
                name: "Frontline Tank",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> to clear 2 Armor Slots.
                    </span>,
                ],
            };
        case CharClass.RANGER:
            return {
                name: "Hold them Off",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> when you succeed on an attack with a
                        weapon to use that same roll against two additional
                        adversaries within range of the attack.
                    </span>,
                ],
            };
        case CharClass.ROGUE:
            return {
                name: "Rogue's Dodge",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> to gain a +2 bonus to your Evasion
                        until the next time an attack succeeds against you.
                        Otherwise, this bonus lasts until your next rest.
                    </span>,
                ],
            };
        case CharClass.SERAPH:
            return {
                name: "Life Support",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> to clear a Hit Point on an ally
                        within Close range.
                    </span>,
                ],
            };
        case CharClass.SORCERER:
            return {
                name: "Volatile Magic",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> to reroll any number of your damage
                        dice on an attack that deals magic damage.
                    </span>,
                ],
            };
        case CharClass.WARRIOR:
            return {
                name: "No Mercy",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> to gain a +1 bonus to your attack
                        rolls until your next rest.
                    </span>,
                ],
            };
        case CharClass.WIZARD:
            return {
                name: "Not This Time",
                description: [
                    <span key="hope-feature-description">
                        <b>Spend 3 Hope</b> to force an adversary within Far
                        range to reroll an attack or damage roll.
                    </span>,
                ],
            };
    }
}

export function getBaseFeaturesByClass(className: CharClass): Ability[] {
    switch (className) {
        case CharClass.BARD:
            return [
                {
                    name: "Rally",
                    description: [
                        <span key="class-feature-description-1">
                            Once per session, describe how you rally the party
                            and give yourself and each of your allies a Rally
                            Die. At level 1, your Rally Die is a <b>d6</b>. A PC
                            can spend their Rally Die to roll it, adding the
                            result to their action roll, reaction roll, damage
                            roll, or to clear a number of Stress equal to the
                            result. At the end of each session, clear all
                            unspent Rally Dice.
                        </span>,
                        <span key="class-feature-description-1_1">
                            At level 5, your Rally Die increases to a <b>d8</b>.
                        </span>,
                    ],
                },
            ];
        case CharClass.DRUID:
            return [
                {
                    name: "Beastform",
                    description: [
                        <span key="class-feature-description-1">
                            <b>Mark a Stress</b> to magically transform into a
                            creature of your tier or lower from the Beastform
                            list. You can drop out of this form at any time.
                            While transformed, you can’t use weapons or cast
                            spells from domain cards, but you can still use
                            other features or abilities you have access to.
                            Spells you cast before you transform stay active and
                            last for their normal duration, and you can talk and
                            communicate as normal. Additionally, you gain the
                            Beastform’s features, add their Evasion bonus to
                            your Evasion, and use the trait specified in their
                            statistics for your attack. While you’re in a
                            Beastform, your armor becomes part of your body and
                            you mark Armor Slots as usual; when you drop out of
                            a Beastform, those marked Armor Slots remain marked.
                            If you mark your last Hit Point, you automatically
                            drop out of this form.
                        </span>,
                    ],
                },
                {
                    name: "Wildtouch",
                    description: [
                        <span key="class-feature-description-2">
                            You can perform harmless, subtle effects that
                            involve nature—such as causing a flower to rapidly
                            grow, summoning a slight gust of wind, or starting a
                            campfire—at will.
                        </span>,
                    ],
                },
            ];
        case CharClass.GUARDIAN:
            return [
                {
                    name: "Unstoppable",
                    description: [
                        <span key="class-feature-description-1">
                            Once per long rest, you can become Unstoppable. You
                            gain an Unstoppable Die. At level 1, your
                            Unstoppable Die is a <b>d4</b>. Place it on your
                            character sheet in the space provided, starting with
                            the 1 value facing up. After you make a damage roll
                            that deals 1 or more Hit Points to a target,
                            increase the Unstoppable Die value by one. When the
                            die’s value would exceed its maximum value or when
                            the scene ends, remove the die and drop out of
                            Unstoppable. At level 5, your Unstoppable Die
                            increases to a <b>d6</b>.
                        </span>,
                        <span key="class-feature-description-1_1">
                            While <i>Unstoppable</i>, you gain the following
                            benefits:
                        </span>,
                        <ul key="class-feature-description-1_2">
                            <li>
                                You reduce the severity of physical damage by
                                one threshold (Severe to Major, Major to Minor,
                                Minor to None).
                            </li>
                            <li>
                                You add the current value of the Unstoppable Die
                                to your damage roll.
                            </li>
                            <li>
                                You can’t be <i>Restrained</i> or{" "}
                                <i>Vulnerable</i>.
                            </li>
                        </ul>,
                    ],
                    clarification: [
                        <span key="class-feature-clarification-1">
                            <b>Tip</b>: If your Unstoppable Die is a d4 and the
                            4 is currently facing up, you remove the die the
                            next time you would increase it. However, if your
                            Unstoppable Die has increased to a d6 and the 4 is
                            currently facing up, you’ll turn it to 5 the next
                            time you would increase it. In this case, you’ll
                            remove the die after you would need to increase it
                            higher than 6.
                        </span>,
                    ],
                },
            ];
        case CharClass.RANGER:
            return [
                {
                    name: "Ranger's Focus",
                    description: [
                        <span key="class-feature-description-1">
                            <b>Spend a Hope</b> and make an attack against a
                            target. On a success, deal your attack’s normal
                            damage and temporarily make the attack’s target your{" "}
                            <i>Focus</i>. Until this feature ends or you make a
                            different creature your <i>Focus</i>, you gain the
                            following benefits against your <i>Focus</i>:
                        </span>,
                        <ul key="class-feature-description-1_1">
                            <li>
                                You know precisely what direction they are in.
                            </li>
                            <li>
                                When you deal damage to them, they must mark a
                                Stress.
                            </li>
                            <li>
                                When you fail an attack against them, you can
                                end your Ranger’s Focus feature to reroll your
                                Duality Dice.
                            </li>
                        </ul>,
                    ],
                },
            ];
        case CharClass.ROGUE:
            return [
                {
                    name: "Cloaked",
                    description: [
                        <span key="class-feature-description-1">
                            Any time you would be <i>Hidden</i>, you are instead
                            <i>Cloaked</i>. In addition to the benefits of the{" "}
                            <i>Hidden</i>
                            condition, while <i>Cloaked</i> you remain unseen if
                            you are stationary when an adversary moves to where
                            they would normally see you. After you make an
                            attack or end a move within line of sight of an
                            adversary, you are no longer <i>Cloaked</i>.
                        </span>,
                    ],
                },
                {
                    name: "Sneak Attack",
                    description: [
                        <span key="class-feature-description-2">
                            When you succeed on an attack while <i>Cloaked</i>{" "}
                            or while an ally is within Melee range of your
                            target, add a number of
                            <b>d6s</b> equal to your tier to your damage roll.
                        </span>,
                        <ul key="class-feature-description-2_1">
                            <li>Level 1 → Tier 1</li>
                            <li>Levels 2–4 → Tier 2</li>
                            <li>Levels 5–7 → Tier 3</li>
                            <li>Levels 8–10 → Tier 4</li>
                        </ul>,
                    ],
                },
            ];
        case CharClass.SERAPH:
            return [
                {
                    name: "Prayer Dice",
                    description: [
                        <span key="class-feature-description-1">
                            At the beginning of each session, roll a number of{" "}
                            <b>d4s</b> equal to your subclass’s Spellcast trait
                            and place them on your character sheet in the space
                            provided. These are your Prayer Dice. You can spend
                            any number of Prayer Dice to aid yourself or an ally
                            within Far range. You can use a spent die’s value to
                            reduce incoming damage, add to a roll’s result after
                            the roll is made, or gain Hope equal to the result.
                            At the end of each session, clear all unspent Prayer
                            Dice.
                        </span>,
                    ],
                },
            ];
        case CharClass.SORCERER:
            return [
                {
                    name: "Arcane Sense",
                    description: [
                        <span key="class-feature-description-1">
                            You can sense the presence of magical people and
                            objects within Close range.
                        </span>,
                    ],
                },
                {
                    name: "Minor Illusion",
                    description: [
                        <span key="class-feature-description-2">
                            Make a <b>Spellcast Roll (10)</b>. On a success, you
                            create a minor visual illusion no larger than
                            yourself within Close range. This illusion is
                            convincing to anyone at Close range or farther.
                        </span>,
                    ],
                },
                {
                    name: "Channel Raw Power",
                    description: [
                        <span key="class-feature-description-3">
                            Once per long rest, you can place a domain card from
                            your loadout into your vault and choose to either:
                        </span>,
                        <ul key="class-feature-description-3_1">
                            <li>Gain Hope equal to the level of the card.</li>
                            <li>
                                Enhance a spell that deals damage, gaining a
                                bonus to your damage roll equal to twice the
                                level of the card.
                            </li>
                        </ul>,
                    ],
                },
            ];
        case CharClass.WARRIOR:
            return [
                {
                    name: "Attack of Opportunity",
                    description: [
                        <span key="class-feature-description-1">
                            If an adversary within Melee range attempts to leave
                            that range, make a reaction roll using a trait of
                            your choice against their Difficulty. Choose one
                            effect on a success, or two if you critically
                            succeed:
                        </span>,
                        <ul key="class-feature-description-1_1">
                            <li>They can’t move from where they are.</li>
                            <li>
                                You deal damage to them equal to your primary
                                weapon’s damage.
                            </li>
                            <li>You move with them.</li>
                        </ul>,
                    ],
                },
                {
                    name: "Combat Training",
                    description: [
                        <span key="class-feature-description-2">
                            You ignore burden when equipping weapons. When you
                            deal physical damage, you gain a bonus to your
                            damage roll equal to your level.
                        </span>,
                    ],
                },
            ];
        case CharClass.WIZARD:
            return [
                {
                    name: "Prestidigitation",
                    description: [
                        <span key="class-feature-description-1">
                            You can perform harmless, subtle magical effects at
                            will. For example, you can change an object’s color,
                            create a smell, light a candle, cause a tiny object
                            to float, illuminate a room, or repair a small
                            object.
                        </span>,
                    ],
                },
                {
                    name: "Strange Patterns",
                    description: [
                        <span key="class-feature-description-2">
                            Choose a number between 1 and 12. When you roll that
                            number on a Duality Die, gain a Hope or clear a
                            Stress. You can change this number when you take a
                            long rest.
                        </span>,
                    ],
                },
            ];
    }
}
