import React from "react"

const All = () => (
  <>
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <p>
      Primum igitur, inquit, sic agam, ut de homine sensibus reliqui nihil
      molestiae consequatur, vel illum, qui dolorem ipsum, quia non possim
      accommodare torquatos <a href="#">nostros?</a> quos tu paulo ante cum
      soluta nobis est consecutus? laudem et rationibus conquisitis de quo.
      Probabo, inquit, sic agam, ut et accurate disserendum et quas molestias
      excepturi sint, obcaecati <strong>cupiditate</strong> non{" "}
      <em>numquam eius modi tempora</em> incidunt, ut perspiciatis, unde omnis
      dolor repellendus temporibus autem vel illum, qui in voluptate ponit, quod
      maxime consuevit iactare.
    </p>
    <blockquote>
      <p>
        Primum igitur, inquit, sic agam, ut de homine sensibus reliqui nihil
        molestiae consequatur, vel illum, qui dolorem ipsum, quia non possim
        accommodare torquatos <a href="#">nostros?</a>{" "}
      </p>
      <p>
        quos tu paulo ante cum soluta nobis est consecutus? laudem et rationibus
        conquisitis de quo. Probabo, inquit, sic agam, ut et accurate
        disserendum et quas molestias excepturi sint, obcaecati{" "}
        <strong>cupiditate</strong> non <em>numquam eius modi tempora</em>{" "}
        incidunt, ut perspiciatis, unde omnis dolor repellendus temporibus autem
        vel illum, qui in voluptate ponit, quod maxime consuevit iactare.
      </p>
    </blockquote>
    <pre>
      {JSON.stringify(
        {
          one: 1,
          two: 2,
          three: 3,
        },
        null,
        2
      )}
    </pre>
  </>
)

export default All
