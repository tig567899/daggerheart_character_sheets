import { useSelector } from "react-redux";

import { getBaseFeaturesByClass } from "@dh_sheets/app/char-class-util";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { getClassData } from "@dh_sheets/app/redux/character-data-store/selector";

import styles from "./class-feature-block.module.css";

export const ClassFeatureBlock = () => {
    const classData = useSelector(getClassData);
    const featuresByClass = classData.charClass.map((charClass) =>
        getBaseFeaturesByClass(charClass),
    );

    const title = featuresByClass.flat().length === 1 ? 'Class Feature' : 'Class Features';

    return (
        <FramedBlock>
            <BlockTitle title={title} />
            {featuresByClass.map((featureList, index) => (
                <div key={`feature-list-${index}`}>
                    {featuresByClass.length > 1 ? (
                        <div className={styles.classTitle}></div>
                    ) : null}
                    {featureList.map((feature) => (
                        <div key={`feature-${feature.name}`}>
                            <div className={styles.featureName}>
                                {feature.name}
                            </div>
                            <div className={styles.featureDescription}>
                                {feature.description.map(
                                    (description, descriptionIndex) => (
                                        <div
                                            key={`feature-description-part-${descriptionIndex}`}
                                            className={
                                                styles.featureDescriptionBlock
                                            }
                                        >
                                            {description}
                                        </div>
                                    ),
                                )}
                            </div>
                            {feature.clarification ? (
                                <div className={styles.featureClarification}>
                                    {...feature.clarification}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            ))}
        </FramedBlock>
    );
};
