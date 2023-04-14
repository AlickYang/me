import apiIcon from "../../public/api.png"
import infraIcon from "../../public/cloud-service.png"
import programmingIcon from "../../public/code.png"
import Card from './UI/Card'
import ExpandingCard from "./UI/ExpandingCard"
import FlippingCard from './UI/FlippingCard'
const Skills = () => {
    return (
        <div className="Skills">
            <h2 className="text-3xl font-latoBlack">
                Skills
            </h2>
            <div className="lg:inline-flex flex-wrap gap-8 ">
                <ExpandingCard header={"Programming Languages"} media={programmingIcon}>
                    <ul>
                        <li className="py-1"> JavaScript </li>
                        <li className="py-1"> Python </li>
                        <li className="py-1"> Go  </li>
                    </ul>
                </ExpandingCard>
                <ExpandingCard header={"Frameworks & Libraries"} media={apiIcon}>
                    <ul>
                        <li className="py-1"> Express </li>
                        <li className="py-1"> Flask </li>
                        <li className="py-1"> React  </li>
                    </ul>
                </ExpandingCard>
                <ExpandingCard header={"Infrastructure & Tooling"} media={infraIcon}>
                    <ul>
                        <li className="py-1"> IBM Cloud </li>
                        <li className="py-1"> Kubernetes  </li>
                        <li className="py-1"> OpenShift  </li>
                        <li className="py-1"> Terraform </li>
                        <li className="py-1"> Ansible  </li>
                    </ul>
                </ExpandingCard>
            </div>
        </div>
    )
}

export default Skills