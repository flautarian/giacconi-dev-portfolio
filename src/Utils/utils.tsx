
import { DiJavascript, DiMongodb, DiPython } from "react-icons/di";
import { FaAngular, FaDocker, FaFlask, FaJava, FaReact, FaWifi, FaWindowMaximize } from "react-icons/fa6";
import { SiGunicorn, SiLatex, SiRender, SiSpringboot, SiTypescript } from "react-icons/si";
import { TbJson } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";

const Utils = {
  formatDate: (date) => {
    return new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  },
  iconMap: {
    python: { component: <DiPython size={72} />, url: "https://www.python.org/" },
    flask: { component: <FaFlask size={64} />, url: "https://flask.palletsprojects.com/en/3.0.x/" },
    mongo: { component: <DiMongodb size={72} />, url: "https://www.mongodb.com/" },
    gunicorn: { component: <SiGunicorn size={72} />, url: "https://gunicorn.org/" },
    render: { component: <SiRender size={48} />, url: "https://render.com/" },
    react: { component: <FaReact size={72} />, url: "https://react.dev/" },
    angular: { component: <FaAngular size={72} />, url: "https://angular.io/" },
    tkinter: { component: <FaWindowMaximize size={72} />, url: "https://docs.python.org/3/library/tkinter.html" },
    json: { component: <TbJson size={72} />, url: "https://www.json.org/json-en.html" },
    latex: { component: <SiLatex size={72} />, url: "https://www.latex-project.org/" },
    typescript: { component: <SiTypescript size={72} />, url: "https://www.typescriptlang.org/" },
    javascript: { component: <DiJavascript size={72} />, url: "https://www.javascript.com/" },
    i18n: { component: <IoLanguage size={72} />, url: "https://www.i18next.com/" },
    rest: { component: <FaWifi size={72} />, url: "https://developer.mozilla.org/es/docs/Web/HTTP/Overview" },
    springboot: { component: <SiSpringboot size={72} />, url: "https://spring.io/projects/spring-boot" },
    java: { component: <FaJava size={72} />, url: "https://www.java.com" },
    docker: { component: <FaDocker size={72} />, url: "https://www.docker.com/" },
    nextjs: { component: <RiNextjsFill size={72} />, url: "https://nextjs.org/" },
    nodejs: { component: <RiNodejsFill size={72} />, url: "https://nodejs.org/" },
    redis: { component: <img src="/icons/redis-icon.png" alt="Redis" />, url: "https://redis.io/" },
  }
}

export default Utils;