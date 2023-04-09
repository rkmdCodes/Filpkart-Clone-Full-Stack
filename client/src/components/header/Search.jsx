import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { InputBase, Box, styled, ListItem,List } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/productActions";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const SearchIconWrapper = styled(SearchIcon)`
  color: blue;
  padding: 5px;
`;

const StyledInputBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;


const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const getText = (event) => {
    setText(event.target.value);
  };

  return (
    <SearchContainer>
      <StyledInputBase
      placeholder="Search for products, brands and more"
      inputProps={{ 'aria-label': 'search' }}
      value={text}
      onChange={(e) => getText(e)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {text && <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
             <ListItem>
                <Link to={`/product/${product.id}`} onClick={()=>setText("")} style={{color:"inherit",textDecoration:"none"}} >
                   {product.title.longTitle}
                </Link>
             </ListItem>

            ))
          }
        </ListWrapper>}

    </SearchContainer>
  );
};

export default Search;
