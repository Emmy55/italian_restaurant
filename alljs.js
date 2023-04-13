        btn = document.querySelector(".burger")
        navlist = document.querySelector("ul")
        bod = document.querySelector('#head')
        btn1 = document.querySelector(".burger1")
        
        btn.addEventListener('click', () => {
            navlist.classList.toggle("clipped").checked
            // btn.innerHTML = btn1
        })

        ul = document.getElementById("hamburger")
        ul.addEventListener('click', () => {
            navlist.classList.toggle("clipped").checked = false
            // enable = false
        })
        bod.addEventListener('click', () => {
            navlist.classList.toggle("clipped").checked = false
        })




        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.animated')[0].classList.add('fadeInTop')
                    document.querySelectorAll('.animated')[1].classList.add('fadeInLeft')
                    document.querySelectorAll('.animated')[2].classList.add('fadeInTop')
                    document.querySelectorAll('.animated')[3].classList.add('fadeInLeft')
                    document.querySelectorAll('.animated')[4].classList.add('fadeInRight')
                    document.querySelectorAll('.animated')[5].classList.add('fadeInTop')
                    document.querySelectorAll('.animated')[5].classList.add('fadeInLeft')
                    document.querySelectorAll('.animated')[6].classList.add('fadeInTop')

                }
            })

        })

        observer.observe(document.querySelector(".container"))


        function sendMail() {
            fname = document.getElementById("name").value
            sname = document.getElementById("lname").value
            let params = {
                name: `${fname} ${sname}`,
                email: document.getElementById("email").value,
                date: document.getElementById("dt").value,
                time: document.getElementById("tm").value,
                people: document.getElementById("people").value,
                phone: document.getElementById("phone").value,
                comment: document.getElementById("comment").value,
                subscribe: document.getElementById("subscribe").value,
            }
            const serviceID = "service_4phwras"
            const templateID = "template_q5so3b8"
            let allname = `${fname} ${sname}`
            emailjs
                .send(serviceID, templateID, params)
                .then((res) => {
                    allname = ""
                    document.getElementById("email").value = ""
                    document.getElementById("dt").value = ""
                    document.getElementById("tm").value = ""
                    document.getElementById("people").value = ""
                    document.getElementById("phone").value = ""
                    document.getElementById("comment").value = ""
                    document.getElementById("subscribe").value = ""
                    console.log(res)
                    alert("Your message sent Successfully");
                }
                )
                .catch((err) => console.log(err));
        }

        let parm = {email_id: document.getElementById("emai").value}
        function sendSubscribe() {
            emailjs.send("service_4phwras","template_kmvdds4", parm)
        .then((res) => {
            document.getElementById("email").value = ""
            alert("Your message was sent Successfully");
        }
        )
        }
        document.addEventListener("DOMContentLoaded", function () {
            // it's a div, that holds your news
            // it holds ul with news in li elements
            var div = document.querySelector(".foo");
            div.addEventListener("scroll", function () {
                var max_scroll = this.scrollHeight - this.clientHeight;
                var current_scroll = this.scrollTop;
                var bottom = 100;
                if (current_scroll + bottom >= max_scroll) {
                    var ul = document.querySelector(".food")[0];
                    var current = parseInt(ul.dataset.current, 10);
                    var li = document.querySelector(".food1")[current];
                    var new_li = li.cloneNode(true);
                    ul.appendChild(new_li);
                    ul.dataset.current = current + 1;
                }
            });
        });