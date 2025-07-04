import React, { useEffect, useRef } from 'react';

/**
 * PayFastForm component
 * Props:
 *   - fields: object containing all PayFast form fields (key-value pairs)
 *   - autoSubmit: boolean (default true) - if true, form auto-submits on mount
 *   - target: string (default '_blank') - form target
 *   - onSubmit: function (optional) - called after form is submitted
 */
const PAYFAST_URL = 'https://ipguat.apps.net.pk/Ecommerce/api/Transaction/PostTransaction';

const PayFastForm = ({ fields, autoSubmit = true, target = '_blank', onSubmit }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (autoSubmit && formRef.current) {
      formRef.current.submit();
      if (onSubmit) onSubmit();
    }
  }, [autoSubmit, onSubmit]);

  return (
    <form ref={formRef} method="POST" action={PAYFAST_URL} target={target} style={{ display: 'none' }}>
      {Object.entries(fields).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
    </form>
  );
};

export default PayFastForm; 