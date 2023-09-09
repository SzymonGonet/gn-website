import React, { useEffect, useState } from "react";
import styles from "./ContactSection.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import PageNumLeft from "../../components/PageNumLeft";
import { animations } from "../../global";
import phoneImage from "../../public/icons/contact.png";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import Image from "next/image";

function ContactSection() {
  const [status, setStatus] = useState<boolean>(false);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [startAnim, setStartAnim] = useState(true);
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("To pole jest wymagane."),
      email: Yup.string()
        .email("Nieprawidłowy adres email.")
        .required("To pole jest wymagane."),
      message: Yup.string().required("To pole jest wymagane."),
    }),
    onSubmit: (values: any) => {
      emailjs
        .send(
          "service_nx43ldq",
          "template_90b7fo9",
          values,
          "2Yo9eHbXdo2PryKq6"
        )
        .then(
          (result) => {
            console.log(result.text);
            formik.resetForm();
            setStatus(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  useEffect(() => {
    if (inView && startAnim) {
      animationLeft.start(animations.text.show);
      animationRight.start(animations.item.show);
      setStartAnim(false);
    }
    if (!inView && startAnim) {
      animationLeft.set(animations.text.hidden);
      animationRight.set(animations.item.hidden);
    }

    if (status)
      setTimeout(() => {
        setStatus(false);
      }, 3000);
  }, [animationLeft, animationRight, inView, startAnim, status]);

  return (
    <section id="contact" className={styles.contact}>
      <PageNumLeft text="Kontakt" number="05" />
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.left_container}
          animate={animationLeft}
        >
          <span id={styles.contact_header}>Popracujmy razem!</span>
          <span id={styles.contact_des}>
            Jeśli jesteś zainteresowany naszymi projektami i chciałbyś nawiązać
            współpracę, zachęcamy do skorzystania z formularza kontaktowego lub
            kontaktu telefonicznego. Omówimy Twój projekt, przedstawimy wstępne
            specyfikacje i kosztorysy.
          </span>
          <div className={styles.contact_container}>
            <div className={styles.image_container}>
              <div className={styles.img}>
                <Image src={phoneImage} alt="" />
              </div>
            </div>
            <div className={styles.info_container}>
              <span id={styles.text_header}>Zadzwoń</span>
              <span id={styles.text_des}>+48 XXX XXX XXX</span>
              <span id={styles.text_header}>Napisz</span>
              <span id={styles.text_des}>kontakt@gndesign.pl</span>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.right_container} animate={animationRight}>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.form_container}>
              <label htmlFor="name">imię *</label>
              <br />
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className={styles.error}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className={styles.form_container}>
              <label htmlFor="email">email *</label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className={styles.error}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className={styles.form_container}>
              <label htmlFor="message">wiadomość *</label>
              <br />
              <textarea
                id="message"
                name="message"
                typeof="text"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.errors.message ? (
                <div className={styles.error}>{formik.errors.message}</div>
              ) : null}
            </div>
            <div className={styles.send}>
              {status ? "Wiadomość zsotała wysłana!" : ""}
            </div>
            <button className={styles.button}>
              <span>Wyślij</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
