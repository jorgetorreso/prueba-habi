import { provinces } from "./constants/address";
import { ReactComponent as Step1Icon } from "@/assets/svg/step-1.svg";
import { ReactComponent as Step2Icon } from "@/assets/svg/step-2.svg";
import { ReactComponent as Step3Icon } from "@/assets/svg/step-3.svg";
import { ReactComponent as Step4Icon } from "@/assets/svg/step-4.svg";
import { ReactComponent as Step5Icon } from "@/assets/svg/step-5.svg";
import { ReactComponent as Step6Icon } from "@/assets/svg/step-6.svg";
import { ReactComponent as Step7Icon } from "@/assets/svg/step-7.svg";
import { ReactComponent as Step8Icon } from "@/assets/svg/step-8.svg";
import { ReactComponent as Step9Icon } from "@/assets/svg/step-9.svg";

export const steps = [
  {
    id: "841e9518-9977-11ed-a8fc-0242ac120002",
    step: 1,
    iconNav: Step1Icon,
    title: "Información Personal",
    description: "Para iniciar necesitaremos algunos datos basicos.",
    path: "/p-1--informacion-personal",
    inputs: [
      {
        label: "¿Cuál es tu nombre completo?",
        type: "text",
        placeholder: "Ingresa tu nombre",
        required: {
          value: true,
          message: "Nombre completo es obligatorio.",
        },
        defaultValue: "",
        name: "completeName",
      },
    ],
  },
  {
    id: "841e9b8a-9977-11ed-a8fc-0242ac120002",
    step: 2,
    iconNav: Step2Icon,
    title: "Información de Contacto",
    description: "Necesitaremos información básica para contactarlo",
    path: "/p-2--informacion-de-contacto",
    inputs: [
      {
        label: "¿Cuál es tu correo electrónico?",
        type: "email",
        placeholder: "Ingresa tu correo electrónico",
        required: {
          value: true,
          message: "Correo electronico es obligatorio.",
        },
        name: "email",
      },
    ],
  },
  {
    id: "841e9cde-9977-11ed-a8fc-0242ac120002",
    step: 3,
    iconNav: Step3Icon,
    title: "Información de ubicación",
    description: "¿Dónde se encuentra ubicado el departamento?",
    path: "/p-3--ubicacion",
    inputs: [
      {
        label: "Departamento",
        type: "select",
        placeholder: "Seleccione el departamento",
        values: provinces,
        required: {
          value: true,
          message: "Departamento requerido",
        },
        name: "province",
      },
      {
        label: "Ciudad",
        type: "text",
        placeholder: "Ciudad",
        required: {
          value: true,
          message: "Nombre de la ciudad requerido",
        },
        name: "city",
      },
      {
        label: "Direccion",
        type: "text",
        placeholder: "Direccion completa",
        required: {
          value: true,
          message: "Direccion commpleta requerida",
        },
        name: "address",
      },
      {
        label: "Código Postal",
        type: "text",
        placeholder: "Ingresa su código postal",
        required: {
          value: true,
          message: "Codigo postal requerido",
        },
        name: "zipCode",
      },
      {
        label: "Barrio",
        type: "text",
        placeholder: "Barrio",
        required: {
          value: true,
          message: "Barrio requerido",
        },
        name: "neighborhood",
      },
      {
        label: "Información complementaria",
        type: "text",
        placeholder: "Información complementaria",
        required: {
          value: false,
        },
        name: "other",
      },
    ],
  },
  {
    id: "841e9e14-9977-11ed-a8fc-0242ac120002",
    step: 4,
    iconNav: Step4Icon,
    title: "Información de piso",
    description: "¿En que piso esta ubicado su departamento?",
    path: "/p-4--informacion-de-piso",
    inputs: [
      {
        label: "Numero de piso",
        type: "number",
        placeholder: "Ingresa tu piso",
        required: {
          value: true,
          message: "Numero de piso requerido",
        },
        name: "flat",
        maxValue: 50,
      },
    ],
  },
  {
    id: "841e9f36-9977-11ed-a8fc-0242ac120002",
    step: 5,
    iconNav: Step5Icon,
    title: "Información de espacios",
    description: "¿Su departamento cuenta con los siguientes espacios?",
    path: "/p-5--informacion-de-espacios",
    inputs: [
      {
        label: "Zona BBQ",
        type: "checkbox",
        placeholder: "",
        required: {
          value: false,
        },
        icon: "1",
        name: "bbqArea",
      },
      {
        label: "Salón comunal",
        type: "checkbox",
        placeholder: "",
        required: {
          value: false,
        },
        icon: "2",
        name: "communityHall",
      },
      {
        label: "Parque de Juegos",
        type: "checkbox",
        placeholder: "",
        required: {
          value: false,
        },
        name: "playground",
      },
    ],
  },
  {
    id: "841ea04e-9977-11ed-a8fc-0242ac120002",
    step: 6,
    iconNav: Step6Icon,
    title: "Información de estacionamiento",
    description: "¿Tienes estacionamiento?",
    path: "/p-6--informacion-de-estacionamiento",
    inputs: [
      {
        label: "¿Tienes estacionamiento?",
        type: "select",
        placeholder: "",
        values: ['si', 'no'],
        defaultValue: 'no',
        required: {
          value: true,
          message: "Selecciona una opción",
        },
        name: "parking",
      },
      {
        label: "¿Está techado?",
        type: "select",
        placeholder: "",
        values: ['si', 'no'],
        defaultValue: 'no',
        required: {
          value: true,
          message: "Selecciona una opción",
        },
        conditional: { parking: 'si' },
        name: "roof",
      },
    ],
  },
  {
    id: "841ea184-9977-11ed-a8fc-0242ac120002",
    step: 7,
    iconNav: Step7Icon,
    title: "Información de venta",
    description: "¿Cuál es el valor de tu departamento?",
    path: "/p-7--informacion-de-venta",
    inputs: [
      {
        label: "Precio del departamento",
        type: "number",
        placeholder: "Valor del departamento",
        required: {
          value: true,
          message: "Valor del departamento es obligatorio.",
        },
        name: "salesPrice",
      },
    ],
  },
  {
    id: "841ea288-9977-11ed-a8fc-0242ac120002",
    step: 8,
    iconNav: Step8Icon,
    title: "Fotos",
    description: "Agrega una foto del departamento.",
    path: "/p-8--fotos",
    inputs: [
      {
        label: "Agrega una foto",
        type: "file",
        placeholder: "",
        required: {
          value: false,
        },
        name: "photo",
      },
    ],
  },
  {
    id: "841ea38c-9977-11ed-a8fc-0242ac120002",
    step: 9,
    iconNav: Step9Icon,
    title: "Información accesibilidad",
    description: "¿Cómo es la accecibilidad de tu apartemento?",
    path: "/p-9--informacion-accesibilidad",
    inputs: [
      {
        label: "Tu apartamento cuenta con elevador",
        type: "switch",
        placeholder: "",
        required: {
          value: true,
          message: "Selecciona una opción",
        },
        name: "elevator",
      },
    ],
  },
];
