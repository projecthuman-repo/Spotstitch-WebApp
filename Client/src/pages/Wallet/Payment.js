import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { mastercard, visa } from "../../assets/icons"
import './Wallet.css'
import AddCard from "./AddCard"
import { useGetWalletQuery, useRemoveCardMutation } from "../../services/wallet"
import { setUserData } from "../../features/User/userSlice";


function Payment() {

    const walletResponse = useGetWalletQuery().data
    const [removeCard, { }] = useRemoveCardMutation()
    const wallet = useSelector(state => state.user?.wallet)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (walletResponse) {
            await dispatch(setUserData({ wallet: walletResponse.wallet }))
        }
    }, [walletResponse])

    const HandleRemove = async (index) => {
        try {
            const res = await removeCard(index)
            if (res.error) throw new Error(res.error.data.error.message)
            if (res.data?.status == "ok") {
                await dispatch(setUserData({ wallet: res.data.wallet }))
                window.location.reload()
            }
        } catch (error) {
            console.log('rejected', error.message)
        }


    }

    return <Container className="content-border-l round-s my-3 g-0">
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12} className="fs-20 fw-500">Payment</Col>
            </Row>
        </section>
        <section>
            <Row className="m-3">
                <Col lg={6}>
                    <p>Cards</p>
                    {wallet && wallet.map((card, index) => {
                        return <Container className="border-card mt-2 mb-3 py-2"
                            key={`${index}_${card.cardNumber}_${card.type}`}
                            style={{ minHeight: "90px", height: "180px" }}>
                            <Row>
                                <Col lg={9} xs={9}>**** **** **** {card.cardNumber}</Col>
                                <Col lg={3} xs={2} className="d-flex flex-column" style={{ minHeight: "90px", height: "170px" }}>
                                    <img src={card.cardType || visa} width={54} height={42} />
                                    <button className="btn mt-auto btn-outline-0" onClick={() => { HandleRemove(index) }}>...</button>
                                </Col>
                            </Row>
                        </Container>
                    })}

                    {wallet?.length == 0 && <Row className="d-flex justify-content-center">
                        <p className="text-center">No Cards Found</p>
                    </Row>}
                </Col>
                <Col lg={3} className="d-flex flex-column">
                    <p>Add new payment method</p>
                    <AddCard />
                </Col>
            </Row>
        </section>
    </Container>
}

export default Payment