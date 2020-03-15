import React, { useEffect, useState } from 'react'
import {
  Container,
  Image,
  Title,
  Description,
  Content,
  Tag,
  BuyButton
} from './styles'
import api from '../../services/api'
import { MdAddShoppingCart } from 'react-icons/md'
import { bindActionCreators } from 'redux'
import * as BeerActions from '../../store/modules/cart/actions'
import { connect } from 'react-redux'

const Home = ({ dispatch, addBeer }) => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    getBeers()
  }, [])

  async function getBeers() {
    const response = await api.get('/beers')
    const data = response.data.map(beer => ({
      name: beer.name,
      id: beer._id,
      desc: beer.description,
      tagline: beer.tagline,
      url: beer.image_url
    }))
    setBeers(data)
  }

  function handleBeerAdd(beer) {
    addBeer(beer)
    // dispatch({
    //   type: '@cart/ADD_BEER',
    //   beer
    // })
  }

  return (
    <>
      {beers.map(beer => (
        <Container key={beer.id}>
          <Image src={beer.url} />
          <Content>
            <Title> {beer.name} </Title>
            <Description>{beer.desc}</Description>
            <Tag>{beer.tagline}</Tag>
            <BuyButton onClick={() => handleBeerAdd(beer)}>
              Buy Now
              <MdAddShoppingCart size={12} />
            </BuyButton>
          </Content>
        </Container>
      ))}
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(BeerActions, dispatch)

export default connect(null, mapDispatchToProps)(Home)
