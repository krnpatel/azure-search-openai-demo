import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Tell me the details of ICD-9 Diagnosis codes",
        value: "Tell me the details of ICD-9 Diagnosis codes"
    },
    { text: "show me the number of claims in 2010", value: "show me the number of claims in 2010" },
    { text: "show me the comparision of number of claims in 2008, 2009 and 2010", value: "show me the comparision of number of claims in 2008, 2009 and 2010" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
