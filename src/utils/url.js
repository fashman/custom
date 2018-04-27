const formatUrlOptions = ( params ) => {
  let ct, ic, at, d;
  const list = params ? params.split('-') : [];
  list.forEach(v => {
    if ( v.indexOf('ct_') === 0 ) {
      ct = v.replace('ct_', '');
    } else if ( v.indexOf('ic_') === 0 ) {
      ic = v.replace('ic_', '');
    } else if( v.indexOf('at_') === 0 ) {
      at = v.replace('at_', '');
    } else if( v.indexOf('d_') === 0 ) {
      d = v.replace('d_', '');
    }
  });
  return { ct, ic, at, d };
}

export default formatUrlOptions;