import apiIcon from "../../public/api.png"
import infraIcon from "../../public/cloud-service.png"
import programmingIcon from "../../public/code.png"
import Card from './UI/Card'
const Skills = () => {
    return (
        <div className="Skills">
            <h2 className="text-3xl font-latoBlack">
                Skills
            </h2>
            <div className="lg:inline-flex flex-wrap gap-8 ">
                <Card header={"Programming Languages"} media={programmingIcon}>
                    <p className="py-1"> JavaScript </p>
                    <p className="py-1"> Python </p>
                    <p className="py-1"> Go </p>
                </Card>
                <Card header={"Frameworks & Libraries"} media={apiIcon}>
                    <p className="py-1"> Express </p>
                    <p className="py-1"> Flask </p>
                    <p className="py-1"> React </p>
                </Card>
                <Card header={"Infrastructure & Tooling"} media={infraIcon}>
                    <p className="py-1"> IBM Cloud </p>
                    <p className="py-1"> Terraform </p>
                    <p className="py-1"> Ansible </p>
                    <p className="py-1"> Kubernetes </p>
                    <p className="py-1"> OpenShift </p>
                </Card>
            </div>
        </div>
    )
}

export default Skills