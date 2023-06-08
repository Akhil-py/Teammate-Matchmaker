import React, {useState} from "react";
import "./register_styles.css";
import { Link } from 'react-router-dom';
import API from "../API";

import reg_img from '../Images/register-img.jpeg'
import lock from '../Images/lock.png';
import person from "../Images/person_icon.png";
import discord from "../Images/discord.png";
import mail from "../Images/mail.png";
import college from "../Images/college.png";

function Register() {
    const initialRegisterData = {
        username: "",
        email: "",
        password: "",
        discord: "",
        college: "",
        profilePicture:"UklGRuQwAABXRUJQVlA4INgwAAAwIAGdASqoApECPm02mEikIzKkI/UoklANiWVu+9/ZF9IZ3My+ppySYW1uzpL/J6vNEM5Xd93Zsf+7v1X+a/cr+3dQnyT40/uvz+5zGR/N283/Wf+v/iP8j8E/+f63v1X7CP7F/rh/hPi76bP+1/yPU3+0fq5f8v9u/fF/ef9X7H/9u/5/XY+kv5cXtWfuV6T3////+u2fNe6Z/L/8jxZ9Ffznc5wZ2n/zb8k+ivdZ2j8Aj3D/s/Y8fQOCO+Hpsfa+Z38r6gfCyesewJ+iPWh/1vM5+3f8jgtBSp6nAVhX/Ab0h6e4Loocafb8q8Pc7rvtLO+UT3+Wd8j3A4nJbHArQd/HLaWZ+NRv/x8ihpfYQLU73SIPSwwM2pH/dJxjcz4/nv8s75RPf3HlPDm4MHjtHEdfuvb6998gvtutMBsRdVQtLFFinXZc7pZ3yie/yzvdJakz397XJQRQDj+FPDrF8R92d8oQgXjPYrbWffl6ZVIEQDuL2lnfKJ7/MXLEI5bWnL7MUeeeeleJv8+n/lmztOLym2RKHKLRAilVEZs2U959pZ3yiecmzBYzrcjRA/vRPbHNXAC0NwJwj9rBp7R8vCLYMcQclOq+8+0s75RPenKF/M9iPvT35eIdSfK88wZTVdXtdqtyShzgvf5Z3yie/yxJd0EHdUCD/hoAaFWBRL52/ubiUfJiZRPiwAdXhh/PMB2Rxa8Ql7SzvlE9/lm0N1juUBfss67bXHBLN4ZnHZuZu9drWQgaylFlsDUxewsJfpcuQLzjS/OGxHPefaWd8onv5g+aco1P9HCWe2FBF8qZ3wmuo0DR2dtbbsZ+5zbfyVgDcRX+980Xa75oZlS+LorVj40SnvNlvvS916dVpZO6pE57vYXyIQFAK+Xfn5mJxmcvdJTn76YysQM7tsoPpV4VXQmKPwUlXMpcnH9zCDbi9pZ3yie/x3ECaqMeHFu/t19ekXzzbyd6tYbqugrk8HeSQdmjgM7QxnuBBFlxnde85gXwU+mvCub+K5LimTx3yie/yzvk3w4KWDYJEfUD4wg1oxIy6g+TnSe4IysaRDiKCRsq77uOy/3kz7ERyvkDRNcxq4MFFasfGiTAbV3/b/iQuXhPq0fNQZv3sj5j0Z5ldgbhrMYpF+fnh8WTfnteloUeBMQHFgWNSWfkKJ7/LO+VDXVmL2Tp6/vX3Dh/g0HXiJx3l/i1Tl79zgypaih69MWWlnAk+kUmQoOYX97ONEp7z7Rt4VWe0romMmm//Tbnv2fIamT7RweKeQit/vadbswmlU45eVwYov7hUWLlZ5fnfKJ70ibTRQ0H//wxQ4m/k1DOBRPP/UpdGXYQnoTdglRliLRpowjvG7gestLRaH9xfZ6daaUD+y5zLABhxKvGEiDlXi1Q6rJNQSWkLJO043/8KLSWFtoOFbE8lKTmh7SC4elhdVE9/leSWVf8SZo8jI0uKW3TIxLUCk5KKXfBYWe/y1k83XrFz2xBg+k+0s75HoKWWCS/cUJopSXNc5HM7B+IdGMAWlolPefaWd8onv8s75PnTSNWLKZUhGe7knpSXa6bjvP3aMvpq3BGy22/s5YzlE9/lnfKJ7/LO+R0SnOqxDsMuSW3mwdZX8WJZ2UhKw/6FAuhfpSuMSz43R8ckF9IX4FLaWd8onv8s75I03+IkS+Oas8B32WdHGpusn8vCKAQuN9VyA0AIk0wScpMNz7SzvlE9/lnfKCo9ZkhdxkBqVU1+qyjBmAt20C51vNMjYRI26mKhLJp+sE/W3CorVj40SnvPtLO+6kM3IqnoVbsVqENp0/y1HBMkBpk10wQrFLKqL2b/JSSPTIG7iVDObgwUVqvmw2MhCQCX6XCb04s4ZRyXdDokrpz9+CBQTrlbZ7IkP6eEv9ydsdEACO/Uso8f2ak6cYgx8Qvj2ZOZ7/LO2NhSnbCEH3aeAMmjO8x4P9reYJRBynoLR0TUDj/fy+5W1/2oboZIY6eFK/OordwFn0TRGwf5yNKQhKoc1zgrHHInv8cJ/0flfg9IFZ6QBn0fWCjlNrLQrLOwBUzYL7P+ledDiu6GGCRp0+MHulANFNdTGAGnUttoELTcW0s728BwZgzq8mTmARUPwONElTBgfnDFQ/nnGj+kc1BVewXZyZ5Hak7a4exkE7+kQDV4lgCBaeK/PGg4B8IPN5FOwz/aNGMhIx3MeV9tOs4TBUSwOOfNmU/LRJXtPs7/6cXV0IYUh8DFW06isI2epZ3yie/kgGWc8OPm6gs+yuWl5bOwTP/KPUlp8Kk/27ONdHrgv/zAFjlo7nMIolE+GITfJmhc9laWiS8DJ/vuO4XgzP/cz2qTXFeyI0x/Q21ucGiMEFvuQ9toWwWvzv85xo6d9oHn7XoaX9tud3XHTck01er3+WiSPjRJYz1iwun6Dw3xGBd3dsTQGqmwvocrlKKk4HWjUSYmPr46rznquszkOPol5MW5QkOd/8vVOkD/fjL4eHpllhAdsubmBQgxH7MEQOZ9oh+Sr3jssXir/Rdz4A1nvzvSFD6AHDuspjEYsvkbHDWV1zbasD2qtaWbrEKzus0mkm/iF8CZrKGL71v7BQ+KkJRawtePwJYoA5J6GsRpXkasoP+6gQsf6Fe1qS0FiB9imbWvWOoO6HrFZnNmqydfnbWYSsEMP2BxU7CrxqHGh4BRjK3ahK47k/Ly2/9s+m0Tkl0jGeWHKm/PTp5vYQfLW46V+dUkUsGUhue02QUT38mcqIbHSkY4M3g3NROJx0UIqg70zY5i81Luqo3q2YaiIyQGpvFGzvzW1475RPPqWD3bT8ttdrm0VjhA4GePe35qVyq1iW4OnvPtLO21rYZLzUoOecpLOdVWzqBWKd0Qonv8uY7LvBb+lpaJT3n3ORlMP8cFOpfXCMoqVdeWoadXBgorVj40SnvPtLO9/86PWVwOsxEf/0GPPK8SQF4bTuYMFFasfGiU959pZ3yhPuh9wqU2WUaA/xFVJPMxB0959pZ3yie/yzvlFBKklhUs4cRW5c9Eyd8/YGUV/Zvk8PjRKe8+0s75RPf5Z394T8lhm6f6Q4YZM+1LgwUVqx8aJT3n2lnfIoAAP7yZvr/4RZ8lgyG//gPmyU0pCbeHaNE8Z6DiBbGIE+c6MajBU1/l4Ttmtocl7fcIRSKvdLmD1QggFUx47lVe25AZNkHrNi921jQt6Im70zNHnOuuAyidh1SmLKFfzOaVkUaeDwRmcXIeuflWAVtjLXf615v7kRqTy4TAAJDMUQH/BY8Zv/hpYUPD/dfIi2tPbarIUpSGyFtGoczL6FTK0VH0w94z+P72DfGVlCKBEUcKFum/KmmRMEMZ/mjxJQiFXZ/r3L+1HvyPehlRDb7FQsv+GzCm25Oe1Cf8+d/Y9NzpBEkeYHRWIV38JGLt79cf4Ln+kz0+RvT7kvlX9kaymbILuSK8uMurdVMPMwmtjgUQR0J88/+hzIX+ptrvnDAvB4GgHu/yhisbuINw81xIXFeSlbpxH1gKBghX90MjvGjS+XUAAUUE4GWJIt+JD0u3gaW6JTg0/83lEllvosKmStl27VW9CoWq60fPbvGjGDcgKSnbDQHE2uMgMI2EWU8fQT5CvbdfNzL1wtxrcwbcd3LNeBcpZIXh8Ssr2OFAAG9h/RMDA5CVCnPqHIZm79I1WeELIue8Y8jiERJJkjTQOHfYf8ZlVQCASeSkCQUUR/iPM8a3nXmmh8RwqXTDrLtEwX8buvF2DSMgAMwQqrSJAaXZHNUc8I9JafqijqJuuMklygOPdPHwVRDT0Rd/emTuISwBreNkMimclZPt+68GNG/wCvJQ8Rt+am1fFp08ZKIg37N0gJvmJEBDR6r2wAOKvLLdLAzSHc9hPNaWpYzpDdnwH/gQj19BasCO5oj2xm5LNKKfgYLJMosjXNkGL4DS/JxXPGBg7CmAfBuyFr3NPrtNtQSJSARIAT+VwSBtEcWJ+3qKHgpEp4lxAAes5nTnRWKdywPMlD/nRss1CapRMZwAaxV48taFzzWTQ9x/5RdA8X+gvICp88fEk2i7GCVlcbw+T/VFfh3gt1VJPwHaSK6qOkzzJd6R3UvSQ7Uy5/GB8/USgAn7d7DBqGT4b+yfAJCzRaw+cRHINQyVBNAAqng3yhFo0gMXpkKlBMzgPdsgujZAgk59AjmApb4xF3ObhWmIJES4fxsaFMdGHp66Lhx6EDgDX6+LDlYHeEY7eRhMqUPuWcZepU7GbX2Bc0HYIIEvles0fRKI1K7e7eytODLnrr7QRrtP2Jpw1Sn/wrgPYIqxJjiwPtF2+NASmbkl414r39y/Ner5WiEkee7BTJ0BgbTNwj+taamqSUxOMxz+JEvn4byGAAA6dsHUj/EpXKY27ebUnFBA+m7pXgSjT/NzFYBWVzc5VNbRqbtbGnRq8texCmf7RzwwcOa+ozdYcVpq0B+8zNRjxZmW3WlUJcoO7Qz1eURQj1aHF1ekOsDvYSc9qLUb8znc2aa66jq1wK+XruKl/Mk4y6tjNOZjto+tTwppJ3WbEyfsoyGJ9p2tShj7WERpvwUsLNZxxQ2z30JPRp6AbvaWAztz5p90tgnqmPyKGjds/GyN/m5ai5zFdGq/k4mUZTFYW2UArLsPhdiKd0JNh0oiVK6o1f+Diw4HDWLhUACUhSStSko/Itrbck73BYBD5bKwqjtGRgVcN0Qhu8th7lwyYjtBVHH7IknJcaqAxL1InM48xlPppo7hKSGJu1IFUul4nJPBYgu226zSzoCF3RkNxxd9Wub3/EF25er2dV6gZMUyy6bbr6tU3KXAmxitX/nAcKECBsAHYnvYyHjlvlyp93uCq1YOiFYDOCuHx10XV96oagL5tmx5Ssy69mZFFXYI+pPkt0kN5qTEstgcMWDVjODiKDKCZwjX5UGPR5HtRnu8G7uPXhSq5ioZ9J42I6nh0Jqnulqs8LEqUDtqoody+6glAzHIpAazFmffvKJNGi3QvgXJKEntyAYYAALbEP94Rr2ygpayJuOt031iAd4AAT/07c6ghuRaVu60vziON/vF2YUgN68NTVW7KIbW05PmBM7AdAiGZXNVgrCR+YYj227CpVq5KblP4/2ZQVI3EvUGvKTI7K9v4Ulc99+R1n0Q+FzOctvSrXTlnuwjTIicBKtir/b6tQHUsoTiIc84xx67m+sSWP32RXRXfWMieLFQLZr7CSEuwscrySilVMnB+at90IyI/NRB8oGs43z0AFe27EiDSp+fliSMrN4XB0IKA0d3uGWLg44BJ4oHHK9in+2/EQ2NmGLiwIgbeJAu9oAAWnt3GG9YIZsHbon0T3AfNosErSmsCCQGWQ9R2yd3H00vTxuO7KwNEhgjKOQokcWTDK2acoNxFbEUuQxgdm08bjvULnptqeYNum52PnbwovTFI/KnMICdBFuDBMNOoW6il/I3nwQP9WfRCw5957VX+UZqFrEScNRDUEkAok4u27xDWL9ni2JTaV4ZakVWmLbxWPShT3GaxGjdG10uOEXKoTnjcE9ELhuVtY03kUl8GRQB0hNsjrRA4PR33vFI4YY+gWKj96FmSrLEjTsrmflpBR1Be0O1jZ8kb1rcyI1bp9fK4sRS46jAgBYRbSEGtNBfnJMXB0gAAH5xzMISCU/gSVNwvyRxY74FSOXOQbzGj5a5NbVjWyCvnp7HV0qAY2RABixhnjfgLqqjqBIt4sKCRx4Eh69dWmynCn244H5Hw+wgddimW/ySttHmL6xcJA4GEDlIPV5Zr4ry/h8kHBXngEjkOIy3NbL/qPHjzcm13VkrsucV9WUdxkJvG1jZGcipC2JsWdvCU2l35QV7of4C3Pdp9Af+ypAAQV02QYTeM8OLFHMYIHjTjaZlEekO6jGUx1QUPh6A/Ds4b6Yzcj/sngWaPwAlYiclIufxo7ACri1fLqdwDRM0Bd+n/l0YEBIkPmoF731IEEyVQxdNsL9xH7XxZZ33dD6HcsRRoJQuF2xLaVxMIdZXkYh8oLcMTD1l0RzWXSoNko58gAPtVczFs68nGg3gDQHAquFls7Hz6qW3UwFWuoso3Ca70foypYo+Dm7rq982Knd94GfF4pPg3dUdbnHTwc0MjdY8GQa5nDyXQ7HlvLgDRGfyUi6aeSbnrYSTPe/6hWzFqN2xfnuFtj6VEZw0qzoGsZLc5J51eSTTLwoUNZNDAdHFrCKSils9vVg3T3zLVMImE2PDPOoUt9ADb6UZ+WMbrrQAWVRXDzQci1A3a2Vg/7/fmfUqy9L+fPTfVtNTYHUd91Euq0jMHGx3WuOMAw2sJVViqb/J89BR/wnFJ55mBKVavkJAcCHBrLnKYKj5vLzvsVjx+xKjH8BB7CP4/wLgbvTU4ztHqAN4jByKARHKGH1kxgnslKkDBDRLpFrYL/6A6qLptMyO3GTJRYUr2iM8TZEYHPZy8MhRGNAsoPKxuB8i3LBWU/DC7x10raV50dsAB3LkRBE7LVCoivq/misJKXgfI+SAmnd1u0MgghTMUnwj6GcvOSL8zQ8rgsD3wpnUcMUHotTROUIfAwD+ewt/xgGWlJ6De9CAE69JaYj0yhdUpEIwD/aNPTcLxAyPZ6iAAQUIUU+7Z5U2P4TOD17cEzUhVS5phdQdIvalLPNp8Ip8r2yLL858j2J+qo25TeEJzwaVLY9qOczCzscAHz6IBUOydo23ivMeAA387sKstyvaanl3WLBsZ1l2X700bRUE/sSGv5NK3y4HKXoi1uuP96WFlB81wUUXgiNcolU6qLsebPU+B8boJCQGcpO8w9nU03tFL/7/fCZMsBJDcejL1G8MabN/tR/RG+f7cCHwO33i6TugZ+3o/X7XtWkWa6hX9Vv1p651Ey+fAkBzU7xxlzG5sIaCmLrsKEd7PHwADSoCaLfwos9LjGq0pFGBD7tpAYSAGi0QFwUsXF/aEOtlmwnWoxklM59AMciZ+Co7MKpaVTNTQPXVE6BMn6heFXt4lUxvryunRRPHxCu9RRWrvMKBCrFHurxWg34ypI27gdUQxDUZ8z8/s2Qqw0729nYeQFWQ/Ng1u9yYHHKJ++svaMa7E2an7tUYsFBAA/el+wgsCD8PtprE46YrwyFVZXjw+S4aF2aK6Ov+yJRRXesgDTwvrdYueCf63sAlPP0pe6OQZ1Fo2nZFh0cUf+isW4PHwx8f1i50ah3qduYHPQ+HiAjPQpubgFL+2JPmNiTS4ELwU0Pf/zGdjLav8l0iAc4sjmVim+xRQSkhP1axXYZe2330faAL5qBv0tnhJHqdHAAn9Lgnwa7NmIuSHXgD2L2kHtDnKBfVDlo3l3Z9jjt1Txz7czAgFF7zpLB9ClNHGas3J8z+3T6TM561FWALbElVWR5ayLAFjGRE+crVTHkBspTtHY1GDTj680Ra8z6Inkr4goa+CXC0Xr5JFpjwu5cOA6MAAeu/uKdt4J5Zs0Co5drK2Gq5HkKHNxhhVA72Kn5SQq+yRGzo+vgRPHsj4/UDLloQ1zOsMc9opitT1VdfS3jGtNrDi/V1oUF/XAoz+vriyMDtE7ANJ65uU0uy6ENM2s5q1EXwA/pIBG09+VHhMGVbUVZuAj1ufnxA/CwjxZe+6OvX8/dqmDoJtlBIcLvvwjf5VTUgaywRVy5JipvIZ0TlPzcw2MBqwE8PHctVgG1yDkM6I9vJ6kHdAzzArydBRCIz1DPlp+iz+jj+Bb+P/4IDKXcP65MJ5+rRXbBZB81nQBzXc9Z9EGD1X7fKFpy2cIVDQaf6LFWzpfO6W6Jghc+go9M2xveMd8XQZrOySSxLJiK5WiOIovalLdXJcgd47f2NPRsGl5TrJ7c5LTxb08zCdkFrvGOaVbENDNrYVLArXp78mC+3bwBtQKeBpbqSJzKYZlUDCi3ovnDYKRbEE5anXgPkES7RDwevqJyhcrH2UdR1k+XbNxs5Bi5/fqfe6slouxv5fR0ZQ0HpXClC/SPFEpQ/f5Gdd862xytDwPhtuqrVuDwlY9wmdKkv3XTgbN5j5/SurILWnNO/lx9PS09NBrLWK0JZNfkTcwVv33juGCf6oqBTYXFFN+uQ5bJT/qXgQvHTysAGiQy+eWu7VW+oriZKGhNe4zMvjI/Kse4qFgOQoXs1XgtQU3CqqdVlKIebEU/D5BiWwkS6sCXJOid5UEsMkx5WjPmC64UDUvhyAAGJmfxGFFoAu8KNjzDuCJFxnCR3TwDK5AM8T6E2tWBOUtQbsRWbIGlZmHR6Pt4pnNSmmWyxfVSqkTFmecMWPcL+FCrC/wLrKHAKOB40poB5z6lAIHVkD+iNBEy2kuKsK3LkclYtnbXgAFvGAAAAAAAAAHXnFh9fwwSTU74sgaG+5fjaoKbnwW6ueDM4MLBY13GWXtbIJF2z+aKIPX4VQHVbn07viXJGLK+yjag2PRhcWc7yke3O1M0e1JCPjNeSEp3aaRWhH7w0WSBAwzylfMAoFjS26EumaBk/TcvyntwsQAAABZD6iF6s0S2Fxstu04nEfFQQJPEZQjSOf2m58EUJiSwVgnmbkEGhmn4O+OzlRZ+3XU4njv6UPGOgslgd3Nsoc+nmp/oceDJroskb4+kEoirn7UXbUKdeCGBHzz1jFC3irC/O9BS738I7OUBfVy8pmd3TtEdH0dAmui5MwAAHlMKEQpLlmNOca8D4jStjHNzT59tyZg104w+XCfxrNAdWFCkKRmf3Z9ESzG9D8obNG2Li0gHaUlGlihfk/cwWIBbjj3EeDNC9Yn/dLLbQ6x66KK1mWsuk11aaDdyv9pVoc+BrhvvxRDru+c5f1+EaSMxEYsA7pL6ebSdUQ5XrF+GASWOAQMpUPIH6hqKNzRxnHjYVBI9y0a5cAGCeqK5WIYoTpF5lcOMmOmjeBUU/OZcWEZ9/8UgSsDDb0B6MKplNZpy5IgBb94ImVkMelViactyBozY2LLJizG9k5SXlJbdMiX3jrNT0MZ5IFDW9/NKUxuipVDmKU/MwIr/2v2T+R88ltRD5Z+eQfhnfSPfwcPKvRsREm4TiX9pnd0sur7P2LFoAAJNsmsTPukHt0qRJHrJPiPsGfdGjLVDq6rrWXzXCUd41PeJHRLeLuzNUxdLeCMxw4ro4pLPsTuZR9aYVez1fuLxtPR/ai4uveWxItgyumNbiX64E9uHot88NhMOyFrxFAzdUni97aBI9paf0JaKlHX9oxw0l6awx2j/4W7AoGpfeKLo+0taibhT7UW2Ke2J0BIgZSyyO6wE24So2TXW6n57rkAWx6r+WqS+447O2mnyIXuYXyKpLy/ebif3j2+Yom5nRR+BNwTQ+udcnTQvRYqJ+zvmdAYDbuQU514vrZVY5iqna/oh2HJO+kU8PAADTudfROVjpX54l3oSm/MbbcupWXLyGuHx6xlHZqyOeZ7tjANT+mPW05g7C8NuMSEPr4a/Uqf/HOXcRefkhTymMfb7WA7WgZiPudFKAwulGJaTU16o9Gl6MUeuruVY63EY0HD8qMnz4fZjAgX8+5Z1l51dh/c9rgsF26RbIdLMC8pLcSfOUdFFbNjbEjhlHII546ENryQHyYJR9hbxyf14wn0woQAqapks2HITXsTV/eRK0+0kwj7T90o/YYH3cYnVSfcp+CTOT3qvPH5oG3SspOgXPapdeW/WwBpNBLx0Ij2+N/qy/Uekv1vsP72hYj5LN3vj8FbWHzqlT4BMJhDxCuo7U0FFfJfaisgMfIs/QmoSO99cORqBcbOuGuUUUJ6exblSv+Q72DXx4NCfppugbai93NuBw4vTXv0QjhFKi+d0H64tq5KajTyyIiPm+iCeIfV9hAAABDkWlvXvp6iK7a2BcMumCg7/uAQXBD8Cvor/P+4xVMdDZmWCxiSUWuxP+wz0p527xTmVBQIIG89yeJ42Ux3NhkqfjVHzisHA5pJRhf8+V7LNwrmcQUUp/7mp/nhqTNGyuPO7VdoRUUlTjlF1mmxuEm1v6Q6g74sY5ZuhS9nVOtuvQH1R1Dun+hDCz9tlCeBOFeaKbECrGP23Ag9YDoyvxiuYXRzqMs5Pp25+yww0PrTdQnoZZuuwME21FfBcOI62BvE48Kug3kOaegPhdj0Wk9Ayn202j3ryoxiq1G99xuuEmCQW9yE8jngvGqj9UgQhkmIHnEaw3RwwaJ6hQc/cSXDytzXTCzlElan/TJ3GP7Umss/dxY/uxqQ688FTbXOPMROC1SyUIqAZQtFEMEOxyB0vIUWVbW29rOVJyRL7r4zgN3J9YXkgD8o5UB9ybkEmTUIGP6Y7Lv8XfxpfvHzNA2ZYHVVsohpzy+qAAyHN8ZlsEtvcUCMaclgL+NfJ40L454QtddQ9lWpAf9qpbUI8S5xm7dFXshyJOIfVcrNYq9iuqx0o/WL+303RB8UkQwnw+YORxm0iimNvfAbAhzEL88HEPj3K4irFYkkNoFcAY1QNZZ4eTHwnvzNSMksOZ/oZpUUmRodEaWyBsmx/7Q/ZHF01UUFR+uHuDCtD1ZN64N5Q8QlYCqN0NHK16AzQuzvmCdAdT94IiMii88JmPT+QBUZfEy4cDqjIl8skFyzI8VmSBnItp5/3x/ImAJsU7MXUWAZDFdP+dw0OzyQsEas9ZzFfvfzDB9WuKfI5HOJPcozUlr+9yvGSUCV2nYjqV+ZRgId8039007YcvB0MpBQuo4XAKKmZHcAyJR0TcAhaBnQQDtsJ52sP+cQXtP0LuxBkv42DUULgSJKB4AlkLd134q0/Pl553a1FNZd6iVzMH6tkw3VzVzQ4xrL+w0AaPp4c7gUsURNHPd6016/LVjN9cyFiWpAJy18PM/WIEkqseG0nSer7gZpEOA+v/fgfZXyOf4yp/rosNabyZcRMR8g/P6KXFsGbh6/P5xCciy2sE6cq/WIgjxNE33bjJaPLCOzYwd07ZO2fP/uqe/Qn8+mwIkWhH48Nh0MbWh8mDh7oiwF+XoALomYbXiKrbjihOsbmjJQ8TLHMQ3E9hTSIHHgAaTDfc03daslhnGGCushJ0jwdTUKqSGfNgS66AXG3Deyh+88asUCO4feyw+SeKKJTnS29jWsAIHs9tgqpjdPkBljpmQgBPZzie9FD34JoxgjWys2mvrgbHmY5qJEwkUlR+u6ZfT1Z2zJIjOgrlutjph90J4pemcw60V3yQX5gUEMVQ+ebu7AX7/4TsNYbTDjFKirnDjwVtanY9c4KsDP3yOLqAVKthBVChuoLN+9KXqO3ef14pAxsINcD13hIxCNAv6vcusZcP48LyuCu3My72/SpRmPOMqXMwyEcJVMlMRHVfFZPYRqtVAo/wtKu9F3xLqphckRc/XMN0J9fw4mVcPLRMrRt5gnZlubgBdZt8rVD/QazrOzTsgZWOE/P5N2SAKFtjOpfQd8KC7Haa7wCLed7E76+KFSIYNEereaj9nc7e1sGmMlE5++Z5mLfHlHfEAz9tJXo3z3aDoTIn9rytdw15LopDcdsSfZbmMLe1CgOlmAYAoe6ROsC5pmyYRDHMo6tCiDi8+MNAZ4bpoYrUO/fCog6lClre9Ua8u70/iLyWp3QkWyxnPJhnFi1eH/bW1SLYCC86FqceXLYFSHi85sn53clBVPJfOoO9aVaPqDb1yVqbcMDvuL9ba2Dcy1hDzrcOYCQdUS7tMHef2ejCmEAgOMGgrg7zKp5//H8zRUwi+ldIQ0otmm2EWr7liSuS1NuCTI91W/CYNMLPW0MN5tXvWSdtILGGQl6IEWCcai979sgYjkOijMqs4d1rxctUSheOqCJIRxDGwglwazrQvS7IvxOS6ZkEL0IEGpFqsNqR4WUTNRhRzxm3O0q15nk3jKzEQSY9jdLyad7ddeceER1etY1drA+Vo82jlpzVhl2nj5bE79Ou7MttkPjgMtrEflcL57L+kIUNuyqCOFZqvgcFSJ8D1HzZSEHFYvQDcGIEMBDhv8e+pw48HuhsvQDd0vGfB2EqfvjATRGk81ZjM1wUSLsYRbL4QQseN6DR1dKjVlc404JkwSwmM6O2w+CtJFw1hDcnHLo0hCavSVZnjYanu/j3939MfkRovTAcWtTaDmz99WGTRnOnZZwBU5/D5p5OHaoQ1sRsqvK5U8QxuXV1u799hTSjZVMxtybV/b/RXhmSb/3o8ALj8v5i/5xfs9oEscYyVXLhRB7dyUXI/szzke4oTXegr4Dy9+cdK+oysUFJ13P/wc/WAmoQpaUtX+ZQGPJFaOdU8AmtaBUPifMbjIeaZbowizm2T5XZNo53W05edKh0juV+205RB2fIuDYP8Fpo5enfEuVKs5JsjSMX15SrSwq/9ijeRMICAkpvf6sESzlcP7aD1uX3brys9MC23QSP7LvIlWvywCoNzILIj7xCyCTa4p0JEKEElgk9LsbZfbv9+eVOQVjPoqD3O7dYa0kBUm2Lg81MrUnve/k1UxO2N5eE9vkoELrrWHRndm3OJTbUhxvuxT4wKsSWTgOnZIOZo91PxAYGY0pcMi6xuLx2s543xQ0v3Rsae2T61UJ41age0XVHGWBrtUTb4FymJcA0OMS2uJGRYPYFWvjiphNDEvcx4FNvNPS2DtsPEORC7dUDI6dJp/hSoyfn+qfti4TSZvaWglD1iMIXXty6oxo0hZx5zP4Yx1YmETQYZSuaiob8tZ/6ehGEJ1lbp1IAE733NLQF8JLt0s7CqCPKVxClzOyl6S1jECFiT0JBgAxYoix8m76eE9qDMZfB6Zbb1hVQNF6hUfTcD/yan1m2+XhlrH62OpBZf78tVWv8TxYwK/DZoClPxsj041rWUjpy5l6E5HtLoy3upkAeaLicD2/YWVOEgGU7+db+ckIoeVywIdvNJhG5oUBf3z6TdQBT7HEhQYH8b6wfr2gSjg9MozLAAE9hRSfm99gsVKVjBoeO7wcTpMhZ8F+PC7Dt9t81E8HW5gIzIAUwdGfFwfkZ+9cn0/rGV4H75HYvXCjWn4NghCKfj0SI4EcCW3AUruFaBunCIizixyL13TCwQ+D5Un6loJFK+7Sr4Fq3gtlxr3MFWu79P7NqOGR9mc64Rd/EPK3nDWy3888pwrR17BrNA5jUAjoQdeTOSEROWkh+NswK4iNwq9yWUrBNduQ2ZGkeLtYYF6j/fSdxk3DBKn7wFEbWuVRzQQmHBt+Znt9dF1PyQoecQ+fD5Qczz7naHF7o09cOG/vSzBNpTKFrSUPnpfZ4IqohIge/Ou60voh02Xpvo5OAeUpPUhj6gaCkPE3qtG47QVKHb5JPxAbO8OdhB9nNTIAey1LKC02ttGmGKU5kEOn44GvKVhK9QEkT4fLJhTA5Nu2qnoOSHbOdNOZ74Rsu0eLpOzX26KLcoeFDPDsXQZ2xzBk5yVUwTsepxAPOgK1PQn+goXwn9ZjUcFnosSKuCgDpYDe5zNEC2/ZcUzoEIrJl3s7hh+0WysAG52+e11Rd2whiM1U/rkKgXt0YZG793fxqpKgTU0o53/1LBsyjXO8gO+84Aq5hVJlZyOiwZxL1GNzfGglOlF/cRtn5rziUAKDlOnLk/aCg5l9bicSHUVMako+dF8Glg8d5XSJehSwiB6MlOoJGg7V3tFsz6mRRHFjn9fgBPYV9q0Bbhw0qw/wGx8H5/9b1CxIK/WlbxpWAAOppVcJWINvoyTwoPXaJ/goNt4uHahz4MPX5T0Bz5cYAWV/k7855J5v7koTQ3uynzRNSt4A7vaDIH0dQ4skG5wnWhfUFOy08ppp0wnxf9ZZC5I9XRnvxFv0To+Cpdn+l2kLqsoGtoGb9nisEnST4LnyldFi8salHW7SMaRrxyY2BO7+19NwsDjmzC0vQLJ3EHss35tGLCt2LGBzFbycEKKYZxgNU5ohR6WQCxlhk+LcWZA/WjnzoSKJlq1CTrJYURUHMg2du1r43zJGLFpwticpymXgamVi2QmyXFNgYeMdYVgjaGUumxvcD6QW55MNEmOJebqAUeFF7KsVnIQtXOkDffobCYWtBjN4+I3yePM8evBFnyvDm8Wj+8LI3Zl2PL2S9lWkk7zKl27u4FoFsEBgrzzNvyGs31ltIh38CSbJjsQIhkjgvAcwEXACkrCLLZSGdgQ8ZDsLblFqvddA+fXy2fcaWUKtzmCrysF9fOkeXSnMW096H5n02cB+OM1Vq7aOvnK33/w/aT+g1rWh7M7JaRB9POTzuemJ/L9qQeEvUDXP9hxpwQugsgyuFjRZRsvYUGCpH+Ano6UCE4Ffw0p5E0FFDTh46e5nTXLZdo1gapaNlbKkTC32z4QanXVp7KHhvcePi7uioFSDXhKHSb8RUUZnDfp26253WZomIgpBiV+PtaS4zsLNjVzv9qKGtC2shBRBHPvht2HWKQsq05mnVoR4N4/uLnQH55KfjMlNOZFc8eS6HauNtY8erAZv/ZuaN9PuIuDoe582SuoYjIsbmRK9pxHhuZIgGVr/0Z4eClprrVHtneOPbFPnXQGzB/v8MoWMvzeOoqneplSDgLEd9ZaiteDIvtm5dTcTUkkOvfpdvd4DAXTaxa8DD7phIc3iqdY994BfEeRLRctP8ncPs8sycuPeGuApIh+tIK91N6HWssbstjb6AeDWrHSk+xno6E1uexhuRApTsBHdsi2Zpp3PIQtg9E6HYOhKQr/6fa5MrARCybyC1sEGQLIQe2+N7TwsbGVfhTxK9A5Coa09Jto0HC++gITMYWFR3DQmBU8k3LNV3XC5v11lX/09AL+6W7cPBpkNmSc8wTydG1mNEbm4GFoD7n8RR55XJqYx9D0DHXLDrm/XcO8Bva22Zv/IRKjFQNW5HnnDxzHtquVGrDl2VK/50KpthuRsGRU2DbOvcGn4K2xx1QZKKrucgWiJk+/qEAAMuwu3p+i4e8eSwj0TRnMcnBGVudHySYJ1tZ6crDhFIT/WPnjx8u/frc1mj++WPR7e4CFsuzLObV8SiRFTxV/EK+uJtFkB2WbLrBvEEwJa5d6Iz7lbuU5hz9Yh3y2n46Omn1UYFoBNUpJWz4pCTzlSbJ/jJn8dCDORR/Mxh3enUzIp1imxSGyQpTTw7SZEsdzNAA+wUmWSd12Hfq/Mk2Et2+yM1x3gIu8ImH6KQdO4VOG+K3o15dca0MSTlWAtjG6XaG9+Y5OjW/nSwoctuK3pk2P6zH6nzuztw0gY8DNAHogofb1ptti2UewZXBc5CIpE4R5MzDbchXvJpwO43mtkkyi6KAarxdppjuob0H43eIlymx3SZw1uhpUCjPnBN5qfxxQRIgr0EJCjIa8weIwlDETLshjf6Q3tJ3AeA7a3E/d5nr2HGq7vdAr/akRfp2PkDIXiy8Jh7QcZIH66x5AnUjNa4Uin/kNs0YTj/ckzOs/nKi/+wyc+1NS9YDAYM3KKu2mqh46BaOF+DdnZ8lm2I2/+yJDRjIUHrIhDJpt2HN81CFUAIy7Af5YFbnbe8ccJVjnINhhoVo7LvGXBHfBGKAjSKK4JirOHuAX+Efe09ltK3DNwjPd/pdp6SUEdjUdfZnQPLqbreWLq63gr/PWjr9/rp0THIGT9j38xUjUHy+YKDV9Pkh3CzaLVbiCjaFdDPizKJFHV5CObSY7C0AAFh7txqGP0VoHu70NChUjsosNgSsAvnVbGByHb2eGKMzFyrSjfDVeAuRzWLVZNG+dqSBjxYkRvEKmfBQIat79rQsdGkdO1C7uNX98C4WRXUF5EP6AlOIKYuUUefOjaoAzdTOOHf2d/N1Wlqwm5LCyO1/gNLnD1/0OS+gAhtpIC5SwFju5BXc3ZuKMB7X/GBisA+/rBvCEY5TTliX9LfRt2Ds2z3f2AF6swSduxegxhWB6IwhnEsILk1jfl1UZpOCUIJVKqkLH3Z1f/Uq2LGBLCnbN7k3crdeTz3ttSWmzOY1zKcqXT+tTI6/vzvGZBixJXG2usFO4q9kUu18/J3eh2BvRhbcd2J7QToZ6sPGCjwbISi5Wciwq9O5KCAPQT9qYY0W/JDut1OMs+z/mLOKuw9R1yuRRyt39vrTW06pX4vZE0k1/j77gAJhZ6/pbbaXcsDfTJUqHr9KoISqYRDNTJ+MgebnehaI11QwtqK69ioNeoYMisAJ+/3ShV4YqSfhZ2Pz28zKnANYn2H4AbL0ZlwhlWets0UMkw7pXZMVLgqGDNGq8bwAA0oN35lQFruSRwAAFfn+BJNoGU0oUcQs4Q6F/47tZT0kg3+vR9Mv5kBWqnKoLewUsmNWDiU8d46aUr1fI7EMtg954plXxVegBKszqZpUqgViJXDZvzJKxD/KWhRTyxlTQAAAAFsh1P9wo6qDfiyKuaTipXx1JTUSYbb4WDfzAkEceReLvhsOGhcg/CySovavRjSs3DTtMpJ6+zmTEvGltJTA6eDW6f2yGKDwpYhQYjCRuVUauwAAAI9dRbzWqL0xrKaEN4jhmWltgMYOmLbBa8SIYqI/5q5voKFPek9n1VeplmZoqJ6B7/W3Qus7UDgY2otbzfuQOOQmpJdb7VB+PnZZ1AOwAoAAADx/1W8fcAl7XpRaXwc1g7lcp7pr5coiTqH13GOcUc1M+V6gRRg5pUfNJUQw+ppMyCHMTX7ofDPhMG4dIcU53HDHThuywRwC8lEIZ90HCgENQhFHFJf96x+HuSbVNdAAAAA2EmR5jduto8euP7PQdzrrG6VuD/RHp6JCUAOmu59/IW/Bbn7ZlM6nvE2wAAAAAAAAA="
    }; 

    const [registerData, updateRegisterData] = useState(initialRegisterData);
    const [isValidEmail, setIsValidEmail] = useState(true);


    const handleChange = (e) => {
        updateRegisterData({
            ...registerData,

            //trim whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleRegister = async (e) => {
        console.log("Register Data: ", registerData);
        console.log("event: ", e);
        e.preventDefault();
        const req = e.target;
        const payload = {
            registerInfo: registerData
        }
        console.log(JSON.stringify(payload.purchase));
        console.log("Request: ", req);
        const potential_email = registerData.email;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log("bruhhh" + emailPattern.test(potential_email));
        setIsValidEmail(emailPattern.test(potential_email));


        try {
            if (isValidEmail) {
                await API.sendUserData(payload);
                alert("Created successfully"); 
                window.location.href = "https://ucsdgamed.onrender.com/login";
            } else {
                throw new Error("Bad Eamil")
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while trying to create the user. Please try again later or use an actual email.");
        }
    };

    return(
    <div>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Khand&display=swap" rel="stylesheet"></link>
        </head>
        <div className="container">
            <div className="box">
                <div className="box1">
                    <h1>
                        Register
                    </h1>
                    <form>
                        <div className="input-container">
                            <img src={person} alt="person"></img>
                            <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange}></input>
                        </div>
                        <div className="input-container">
                            <img src={mail} alt="mail"></img>
                            <input type="text" id="email" name="email" placeholder="Email (user@ucsd.edu)" onChange={handleChange}></input>
                        </div>
                        <div className="input-container">
                            <img src={lock} alt="lock"></img>
                            <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange}></input>
                        </div>
                        <div className="input-container">
                            <img src={discord} alt="discord"></img>
                            <input type="text" id="discord" name="discord" placeholder="Discord Tag (example#1234)" onChange={handleChange}></input>
                        </div>
                        <div className="input-container">
                            <img src={college} alt="discord"></img>
                            <select class="college" id="college" placeholder="college "name="college" onChange={handleChange}>
                                <option value="" disabled selected >Select a college</option>
                                <option value="Revelle">Revelle</option>
                                <option value="John Muir">John Muir</option>
                                <option value="Marshall">Marshall</option>
                                <option value="Warren">Warren</option>
                                <option value="ERC">ERC</option>
                                <option value="Sixth">Sixth</option>
                                <option value="Seventh">Seventh</option>
                            </select>
                        </div>
                        {!isValidEmail && <p class="error-msg">Please enter a valid email address.</p>}
                        <Link to="/login">
                            <button value="signup" className="signup-but" onClick={handleRegister}>Signup</button>
                        </Link>
                    </form>
                </div>
                <div className="box2">
                    <img src={reg_img} alt="bruh"></img>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;