import React from 'react';
import { Breadcrumbs } from 'react-breadcrumbs-dynamic';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <div {...rest}>
      <Breadcrumbs
        // {...rest}
        item={Link}
        finalItem={'span'}
        separator={<span> / </span>}
      />
    </div>
  );
};

export default Breadcrumb;
