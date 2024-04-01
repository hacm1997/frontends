import styles from "./styles.module.css";
import Card from "./card/card";
import BotonSelect from "./botonSelect/botonSelect";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import notifier from '../../../../services/notification/notification';
import getPaymentData from '../../../../services/mercadopago/paymentData';
import { EmailTemplate } from '../../../../services/notification/emailTemplate';
import CONFIG from '../../../../services/notification/config';
import { Toaster, toast } from 'sonner';

export default function Selection() {
  const route = useRouter()
  const statusCode = route.query.status

  const handleSendEmail = async () => {
    if (statusCode === 'approved') {
      const payment_id = route.query.payment_id as string
      const paymentData = await getPaymentData(payment_id)
      const { additional_info: { items }, payer, transaction_details } = await paymentData
      const order_url = `${CONFIG.ORDER_URL}${payment_id}`
      const emailBody = EmailTemplate({
        items,
        payer,
        transaction_details: transaction_details.total_paid_amount,
        order_info: order_url
      })
      const medellin = items[0].description.includes('MEDELLIN - POBLADO MANILA') ? CONFIG.EMAIL_ADDRESS_MEDELLIN : CONFIG.EMAIL_ADDRESS
      notifier({
        message: emailBody
      }, medellin as string)
      toast.success('Su pago ha sido aprobado, prepararemos su pedido.')
    }
  }

  useEffect(() => {
    handleSendEmail()
  }, [route])

  return (
    <>
      <section className={styles.section}>
        <div className={styles.general}>
          <div className={styles.tachido} id={"left"}>
            <Card img={"tachido"} alt={"Tachido"} content={"Quiero platos mexicanos"} />
          </div>
          <div className={styles.amala}>
            <Card img={"amala"} alt={"Amala"} content={"Quiero Pizza"} />
          </div>
          <div className={styles.select}>
            <BotonSelect />
          </div>
        </div>
        <Toaster position='top-center' richColors />
      </section>
    </>
  )
}