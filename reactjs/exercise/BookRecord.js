import styled from 'styled-components'
const Ul = styled.ul ` width: 250px;
            margin: 50px auto;
            padding: 15px;
            list-style: none;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px gray;
            display: inline-block;`

const Li = styled.li ` margin: 6px 0;`

const H3 = styled.h3 `  margin: 0 0 10px 0;`
export default function BookRecord(props)
{
    var {name,author,price,rating,category,language}= props;
    return(<Ul>
    <H3>{name}</H3>
    <Li>Author: {author}</Li>
    <Li>Price: ₹{price}</Li>
    <Li>Rating: ⭐⭐⭐⭐{rating}</Li>
    <Li>Category: {category}</Li>
    <Li>Language: {language}</Li>
</Ul>)
}