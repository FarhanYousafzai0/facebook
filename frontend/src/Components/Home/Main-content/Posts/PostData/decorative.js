const colors_data = [
    {
      id: 1,
      title: "decorative",
      list: [
        {
          id: 1,
          image:
            "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg?resize=1250,1120",
        },
        {
          id: 2,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386642172_243340224990391_657600147859724975_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=d5FpSlO60J4Q7kNvwG_TfwK&_nc_oc=AdlHpPIv7KfeLhfQL0PC4sPJKdpRofTPOnOACP9eLVnU5PXd9akpqzRxL33RRo75eqH3gV2mt0gmsiN0fvVGruyA&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=Z2889yHAeZe8U1YK_I6mGQ&oh=00_AfHBBMrlAOn-2F3CEk1rPwnOaL0m2eR5OYLYac3suh68cA&oe=67FEA7A9",
        },
        {
          id: 3,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386759842_820220733135057_6974095149275091276_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=Oc852cVwL0MQ7kNvwFeuZg7&_nc_oc=AdlRiJCAuivORzkeAwj8T1RVwDcm399OzL0RsOSxYX-SGfnThHVyz6HF-09IO1xeqB_MDEH0AwQ2IgBQGwnxKEqq&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=hkdCP_TV2isLoSJIT37bHA&oh=00_AfEOXdGT9Tk6bO5Yc_xxeIx4EGl0MaTD7Y2QHunIo2jZrg&oe=67FEAA39",
        },
        {
          id: 4,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386760737_710893644232077_600092870870224614_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=mUAIttwQvg0Q7kNvwFh9eis&_nc_oc=AdkQR_4spFZHuv3-JXCB3G41jHTiwnO7VTsskPiIe8qe0GoUqz7CLSSDmSlxevyfrKhB59yxlvAIj2oITNnt_jGd&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=nmxwPs4vy_kLVFuLc3-w8A&oh=00_AfEZtBMdP0kAkhAB6_dDS9nQglmDk_wjcBQdGbhQxCcnAQ&oe=67FEDF7B",
        },
        {
          id: 5,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386198533_992723422033543_1015588063564356586_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=wqj9OwRMlyEQ7kNvwFR4YOY&_nc_oc=Adm6x5uMq0rUH1hr0bAPGwFyhEdfW-kqcD2Cr2GTlFOEm6WSruEEOnBylNLqnKCMDICOYjsOg5rU_qIwdPEGnsf_&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=nmxwPs4vy_kLVFuLc3-w8A&oh=00_AfECheWoauXPAB38FAZKZXzVWn6L6GZLe6qwoIP1-YAUhA&oe=67FED237",
        },
        {
          id: 6,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386198762_732044725401756_2886238978400768943_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=-KCNVM2WfewQ7kNvwHcS0iR&_nc_oc=Admc5oixqYXXjH5Wv_g_EuFG7c9nB9aeECVHSEhezQh2joX9RkZrx3pKF3Q-PWAaOra1hc_xJT4g9HvaE-6XiSyb&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=g1VPMopbI1klqk0hFbU_vA&oh=00_AfF0K1zboepB-jwIRkFLopI29dr_AnpEt7WhHgEeemfSFw&oe=67FED710",
        },
        {
          id: 7,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386381358_650785210211194_327079228061647107_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=r_O7vDlY_-IQ7kNvwFsocIa&_nc_oc=AdkpQl5a3ePCGlOI80lxKsN3oC_y2UftReZDkGsKln44hYEFy9U2RWZTKjoII78n88XNFSS0fB96SXFFLXE7fzfh&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=D-nxxu6ClIngWrzMg4cOJg&oh=00_AfHn4JfLN1CHRzMTS_egHDMSirijWvzbOtr3b3XwVGsGVw&oe=67FEA9D6",
        },
        {
          id: 8,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386193240_299890109455123_5601389303826981921_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=111&ccb=1-7&_nc_sid=427b5c&_nc_ohc=hThOg-FyVWkQ7kNvwHM87I1&_nc_oc=AdmJhbz6CqwRGtoJyWeFAAwbAQZLzSYPmKtIAs4MuMQBOPX5oNy9BKBf3cx2_a7p4bH6d5m0igR1vQohVqp8IvDe&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=0yPtnwQMkty4Q252qTc9mw&oh=00_AfFHIw8Rj1FNXvxHLRn39Jl-3Twb1BPQBxnrZD2OF4h_hg&oe=67FED46C",
        },
        {
          id: 9,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386373604_149887708201550_7868642564751984139_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=1IJhj0V2t2IQ7kNvwHNdi8m&_nc_oc=AdlG5EhXoFHHuADUEdElCYyh4xzTsA8QAUBTo8Kwld8n83NogULT_uQ-9EaeuWCGbx49cTsRF9YKGZSLDNdGYk5l&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=D-nxxu6ClIngWrzMg4cOJg&oh=00_AfFFWf3z9kXfXe3sFZmvfTJS41IDfzZFPVhx3-lxQ0AiqA&oe=67FED83C",
        },
        {
          id: 10,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386188822_844319290758585_588704883889202778_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=y9Qvev0_uokQ7kNvwHknhWb&_nc_oc=AdkFPCTSyHq1cbn2hOjih5Jn7kAW3lvUsBTOlkwu4lx-C_9q7l9ZnfHli0cAjiuKVYOZYCwUMHYusx1T41igv3Sn&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=_ZkZbU8GRU3aVkT4plzpoQ&oh=00_AfHZlK6s1HjjAIXvK4622frwU6yY8Krd9xJ_z35lsNugZw&oe=67FEA8C7",
        },
        {
          id: 11,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386198737_1655172558343788_2815641425313260464_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=UepxJNbChHsQ7kNvwHofERy&_nc_oc=AdkY09rCR9ndtfvFsY83ca9dxjjT00sWcmLXLD85uaNv7_T2ycOzCfakPn5jQiz6kY8u8cTP-VDPRJbFna-xBKL5&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=nmxwPs4vy_kLVFuLc3-w8A&oh=00_AfGWjqKYFrM5UdajLV5_orSklFwM66mT0SoC_SC_ZNHg7A&oe=67FEC1C4",
        },
        {
          id: 12,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386717789_1723026301458114_642447346467481335_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=TNlBRO_qcO8Q7kNvwGK2yni&_nc_oc=AdllQ7dup8w2vaaLD8fjfOulDBAWgNfxRPSMgYEhQXvE8SnbvbW3cyzSp0NQsouLUtY-jV8PFbFJg6Iz4IEGOMlA&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=nmxwPs4vy_kLVFuLc3-w8A&oh=00_AfEGUAgkxEsmZ6BEZThpFvPb17CNCBqyZbvy8UYszzWBRA&oe=67FEB84D",
        },
        {
          id: 13,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386357355_639000338369515_4686937837648278203_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=of8OD-4WaOcQ7kNvwHTg3r0&_nc_oc=AdmrGA7MAe9M11X9u9-MIPSLl18lxq95HFiqsfnxJwU6ln_F8U1kqM3b6sZPrsTRCifcV2wFC7Wl4PFL3wFjQx2c&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=g1VPMopbI1klqk0hFbU_vA&oh=00_AfGfoCypuKpkf0Nu0y8ZECd5wUH3KKrS01yXwI6gCBbbBA&oe=67FEAE4F",
        },
        {
          id: 14,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/369046507_1012699416603350_387998969800398228_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=jb0Y3_6AqNoQ7kNvwHzPLVl&_nc_oc=Adn1hbvKXmFqA0SGCL0E4A4PPf3mtmLvWsr8PTuO7IuGIgf0leJqs9oNRpbxXhQLalvMg39L0A4ljrhTFJepgoZp&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=g1VPMopbI1klqk0hFbU_vA&oh=00_AfH0VhdSTgjTFKTy5NbQfEnOdRDkFUu9c49UV7NA6aHO5g&oe=67FEAE81",
        },
        {
          id: 15,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386392711_653263800240451_6910000120771030606_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=_zzAGNBPxvgQ7kNvwGKeJ49&_nc_oc=AdkyC_rdq8RKShp-3JzIN2a3uilyE6gmLxZr95vAgjOoI-MjBulKBDdIzYTfif4pKSjj6L_CzhaJUc8vonVZPdQa&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=vfKz0SvRW6-i7V7C7kKULw&oh=00_AfFu_YY0HTogXa_bL0SUIDTeYoi9XP0qcQkX6AaASWEJRA&oe=67FEC90E",
        },
        {
          id: 16,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386391153_1531491137620873_4011437077535759862_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=XSU2OVTte1sQ7kNvwHrhG9a&_nc_oc=AdnzNe5pDX8tLB0SXpz6p8noxHDZgeML55NSdXpCjYcqJVtSiJYxvuMHhSEfTAfy5Ucx4uBhogyPQPIXqH5tYEHR&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=0yPtnwQMkty4Q252qTc9mw&oh=00_AfE2Ghg2QgRlp2ngAnTrz03HPrOZ3d36VZWblKFXcAVB6Q&oe=67FED323",
        },
        {
          id: 17,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386724696_681225177402621_4660806944265695752_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=neKAFIHXxFwQ7kNvwHwcRue&_nc_oc=AdkTxrP-RwiHPZKPjByr3VCiXxxKa8kE_dObv5RISLMZsWLdOxCjOjIdWmoSsbX628O2utGd9pGGpkgVT_XQ4OYL&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=_ZkZbU8GRU3aVkT4plzpoQ&oh=00_AfHIy2rttuXyGqpCHbJk5IyzPZo81GBEx7BDL0z-7srt7w&oe=67FEAB1E",
        },
        {
          id: 18,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkA0Us_4OgNKRB4WTqM7qAKWneIMf-ATnuw&s",
        },
        {
          id: 19,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386332480_618237120387445_715847918794715752_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=hMq1GsWkzw0Q7kNvwG_vckd&_nc_oc=Adk1t31W81hFqX2FMN0eh6iHnjyCgwLlMRaxcksbQDHpUHUBzr93jkkv3ceTPDuaL2_bkzhiUhLmwN3NTXYaWMMf&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=vfKz0SvRW6-i7V7C7kKULw&oh=00_AfF-t50lhNGf4qGAsoT9NA3Ha_pqNSAJLzjI5QEK3fTuRg&oe=67FEABD4",
        },
      ],
    },
  
    {
      id: 2,
      title: "gradient",
      list: [
        {
          id: 1,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386391153_1531491137620873_4011437077535759862_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=100&ccb=1-7&_nc_sid=427b5c&_nc_ohc=XSU2OVTte1sQ7kNvwEMSc2H&_nc_oc=AdnFY_XYmLt1oc5EQOUF0wictrHB7bercPRy_AQrbSZpJCME6zpe1WNMJXm1EKoS8nX7OyqDGEC9WffIyUKXqGZV&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=H2IJx1c2B3cKXwdv8pwfNg&oh=00_AfFhYHZ6agP8RsfS0Ws_nDjdkljvazmHpEUQ6X0TezPn8A&oe=67FFEC63&quot",
        },
        {
          id: 2,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386391153_1531491137620873_4011437077535759862_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=100&ccb=1-7&_nc_sid=427b5c&_nc_ohc=XSU2OVTte1sQ7kNvwEMSc2H&_nc_oc=AdnFY_XYmLt1oc5EQOUF0wictrHB7bercPRy_AQrbSZpJCME6zpe1WNMJXm1EKoS8nX7OyqDGEC9WffIyUKXqGZV&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=H2IJx1c2B3cKXwdv8pwfNg&oh=00_AfFhYHZ6agP8RsfS0Ws_nDjdkljvazmHpEUQ6X0TezPn8A&oe=67FFEC63",
        },
        {
          id: 3,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386373604_149887708201550_7868642564751984139_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=L3APH5c9T8YQ7kNvwGUSb2L&_nc_oc=AdnD_ppecozlPCX5aaoz8wdfoA8FxR1Bl7J29YR-4bszNvT63zEcJYans-TAsXfK7R1T-9WJ5h75qWHu65295Zsi&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=H2IJx1c2B3cKXwdv8pwfNg&oh=00_AfGUslM31_qd0mbT90BPziedmBMTss6QKrOtrK-xWvVxkw&oe=67FFF17C",
        },
        {
          id: 4,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386373604_149887708201550_7868642564751984139_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=L3APH5c9T8YQ7kNvwGUSb2L&_nc_oc=AdnD_ppecozlPCX5aaoz8wdfoA8FxR1Bl7J29YR-4bszNvT63zEcJYans-TAsXfK7R1T-9WJ5h75qWHu65295Zsi&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=H2IJx1c2B3cKXwdv8pwfNg&oh=00_AfGUslM31_qd0mbT90BPziedmBMTss6QKrOtrK-xWvVxkw&oe=67FFF17C",
        },
        {
          id: 5,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386391153_1531491137620873_4011437077535759862_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=100&ccb=1-7&_nc_sid=427b5c&_nc_ohc=XSU2OVTte1sQ7kNvwEMSc2H&_nc_oc=AdnFY_XYmLt1oc5EQOUF0wictrHB7bercPRy_AQrbSZpJCME6zpe1WNMJXm1EKoS8nX7OyqDGEC9WffIyUKXqGZV&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=H2IJx1c2B3cKXwdv8pwfNg&oh=00_AfFhYHZ6agP8RsfS0Ws_nDjdkljvazmHpEUQ6X0TezPn8A&oe=67FFEC63",
        },
        {
          id: 6,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/387131349_6524876114308484_5290738332862104147_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=QqvEe1FejuMQ7kNvwEKUrhb&_nc_oc=AdlPAJksy9hUvjLu8e_8GBzqF1vdgKw4-3oOeNPB0jNkEcNpeUhIUNgnzdarwXJHBd18KCEwARvsue6CcQLhF2j-&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=H2IJx1c2B3cKXwdv8pwfNg&oh=00_AfFsr2MOBZPIPqemOGY1NSdmsZBJZptkJRgfAZZ3QJ7pPg&oe=68000315",
        },
        {
          id: 7,
          image:
            "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.10873-6/386760737_710893644232077_600092870870224614_n.jpg?stp=dst-jpg_p32x32_tt6&_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_ohc=mUAIttwQvg0Q7kNvwG04h_2&_nc_oc=AdlvQWHtq_a45FwRuJ8FagQ6Jb-rXosczubBglMfAlX1m8IJ_BfYV_lqzYrkutyBZujBNj2N_uTU-YJCsU_gXWnY&_nc_zt=14&_nc_ht=scontent.fisb17-1.fna&_nc_gid=H2IJx1c2B3cKXwdv8pwfNg&oh=00_AfGahhv0UX4URYSdUJDRx08GYuPP6qWagNrLNc-hFwj7Jw&oe=67FFF8BB",
        },
      ],
    },
    {
      id: 3,
      title: "solid",
      list: [
        "#F2F2F2",
        "#A9A9A9",
        "#1C1C1C",
        "#FDCAC4",
        "#F6333F",
        "#950D1F",
        "#FF90C2",
        "#FF2EA6",
        "#B8005C",
        "#FFC58F",
        "#F98726",
        "#B45E09",
        "#FFF78C",
        "#FFD500",
        "#C79B00",
        "#F4FFCF",
        "#C4F232",
        "#648C1A",
        "#D7F7CD",
        "#57C848",
        "#1F7B2E",
        "#D8F9F0",
        "#46D1AE",
        "#007C66",
        "#9EDCFF",
        "#01B9FF",
        "#004C75",
        "#D5C9FD",
        "#8184F4",
        "#463D97",
      ],
    },
  ];
  export default colors_data;